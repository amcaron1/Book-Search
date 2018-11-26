import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import ResultList from "./ResultList.js";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items, search: "" }))
      // .then(res => this.setState({ results: res.data.items }))
      // .then(res =>
      //   this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      // )
      // .then(res => console.log({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log("event :", event);
    // console.log("event.target.value :", event.target.value);
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Google Books for `this.state.search`
  handleFormSubmit = event => {
    console.log("event.target.className: ", event.target.className);
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleSaveBook = event => {
    event.preventDefault();
    const i = event.target.name;
    console.log("i: ", i);
    console.log("this.state.results: ", this.state.results);
    API.saveBook({
      title: this.state.results[i].volumeInfo.title,
      authors: this.state.results[i].volumeInfo.authors[0],
      description: this.state.results[i].volumeInfo.description,
      image: this.state.results[i].volumeInfo.imageLinks ? this.state.results[i].volumeInfo.imageLinks.smallThumbnail: null,
      link: this.state.results[i].volumeInfo.infoLink
    })
      .catch(err => console.log(err));
    
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList 
          results={this.state.results}
          handleSaveBook={this.handleSaveBook}
        />
      </div>
    );
  }
}

export default Search;

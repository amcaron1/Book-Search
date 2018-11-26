import React, { Component } from "react";
import SavedList from "./SavedList.js";
import SavedHeader from "./SavedHeader.js";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data});
        console.log("books: ", this.state.books);
      })
      .catch(err => console.log(err));
  };

  handleDeleteBook = event => {
    console.log("event.target.name: ", event.target.name);
    API.deleteBook(event.target.name)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
    this.loadBooks();
  };

  render() {
    return (
      <div>
        <SavedHeader/>
        <SavedList 
          books={this.state.books}
          handleDeleteBook={this.handleDeleteBook}
        />
      </div>
    );
  }
}

export default Saved;
import React from "react";
import "./SavedList.css";

const SavedList = props => (
  <ul className="list-group">
    {props.books.map(book => (
      <li className="list-group-item container" key={book._id}>
        <div className="row">
          <div className="col-md-3">
            <h5>{book.title}</h5>
            <p>Written by {book.authors[0]}</p>
            <img
              alt={book.title}
              className="img-fluid"
              src={book.image}
            />
          </div>
          <div className="col-md-9">
            <div className="container">
              <div className="row">
                <div className="col-md-12 result-buttons">
                  <button 
                    onClick={props.handleDeleteBook}
                    className="save-button" name={book._id}
                    >
                    {/* <a href="#">Save</a> */}
                    Delete
                  </button>
                  <button className="view-button">
                    <a href={book.link} target="_blank" rel="noopener">View</a>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p>{book.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default SavedList;

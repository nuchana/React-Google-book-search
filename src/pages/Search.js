import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { BookList, BookListItem } from "../components/List";
import { Input, SearchButton } from "../components/Input";


class Search extends Component {
  // instatiate state for list of books retrieved from googlebooks api and bookSearch value
  state = {
    
    books: [],
    bookSearch: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

 

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.bookSearch)
      .then (res => {
        this.setState({ books: res.data.items }, function () {
          console.log(this.state.books);
          
        })
      })
      .catch (err => console.log (err))
  };

}

export default Search;

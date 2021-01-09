import axios from "axios";
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // calls googlbooks api and retrieve books based on user input
  searchBooks: function (query) {
    return axios.get(BaseUrl + query);
  },
  // Gets all saved books in db
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};




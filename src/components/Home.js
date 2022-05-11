import React, { useState, useEffect } from "react";
import API from "../API";
import SearchBar from "./SearchBar/SearchBar";
import { Spinner } from "./Spinner/Spinner.styles";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await API.get(`search.json?author=${searchTerm}`);
        console.log(response.data.docs);
        setBooks(response.data.docs);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
      setLoading(false);
    };
    fetchBooks();
  }, [searchTerm]);

  return (
    <div>
      {loading && <Spinner />}
      {books.map((book, i) => (
        <p key={i}>{book.title}</p>
      )).slice(0,5)}
      <SearchBar setSearchTerm={setSearchTerm}/>
    </div>
  );
};

export default Home;

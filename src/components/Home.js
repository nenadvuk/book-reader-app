import { useState, useEffect } from "react";
// API
import API from "../API";
// Components
import SearchBar from "./SearchBar/SearchBar";
import { Spinner } from "./Spinner/Spinner.styles";
import BooksGrid from "./BooksGrid/BooksGrid";
import Book from "./Book/Book";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        setLoading(true);
        const response = await API.get(`search.json?author=${searchTerm}`);
        console.log(response.data.docs);
        setBooks(response.data.docs);
        setLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
     
    };
    fetchSearch();
  }, [searchTerm]);


  return (
    <>
      {loading && <Spinner />}
      <SearchBar setSearchTerm={setSearchTerm} />
      <BooksGrid>
        {books
          .map((book, i) => (
            <Book
              key={i}
              author={book.author_name}
              authorKey={book.author_key}
              bookKey={book.key}
              title={book.title}
              editionCount={book.edition_count}
              posterUrl={book.cover_i}
            />
          ))
          /* .slice(0, 6) */}
      </BooksGrid>
    </>
  );
};

export default Home;

import { useState, useEffect } from "react";
// API
import API from "../API";
// Components
import SearchBar from "./SearchBar/SearchBar";
import { Spinner } from "./Spinner/Spinner.styles";
import BooksGrid from "./BooksGrid/BooksGrid";
import Book from "./Book/Book";
import Category from "./Category/Category";
import Video from "./Video/Video";
// Styles
import { Wrapper } from "./HomeStyle";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("author");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [showVideo, setShowVideo] = useState(true);

  
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        setLoading(true);
        // Search titles or authors
        const searchResponse = await API.get(
          `search.json?${category}=${searchTerm}`
        );
        console.log(searchResponse.data.docs);
        setBooks(searchResponse.data.docs);
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
  }, [searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Display video component only when user is not searching */}
      {!searchTerm ? <Video /> : null }
      {loading && <Spinner />}
      <Wrapper style={{ display: "flex" }}>
        <Category category={category} setCategory={setCategory} />
        <SearchBar category={category} setSearchTerm={setSearchTerm} />
      </Wrapper>

      <BooksGrid>
        {books
          .map((book, i) => (
            <Book
              key={i}
              author={book.author_name}
              bookKey={book.key}
              title={book.title}
              editionCount={book.edition_count}
              posterUrl={book.cover_i}
            />
          ))
          .slice(0, 6)}
      </BooksGrid>
    </>
  );
};

export default Home;

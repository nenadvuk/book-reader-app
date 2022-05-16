import { useState, useEffect } from "react";
// API
import API from "../API";
// Components
import SearchBar from "./SearchBar/SearchBar";
// import { Spinner } from "./Spinner/Spinner.styles";
import BooksGrid from "./BooksGrid/BooksGrid";
import Book from "./Book/Book";
import Category from "./Category/Category";
import Video from "./Video/Video";
// Styles
import { Wrapper } from "./HomeStyle";

const Home = ({
  category,
  setCategory,
  searchTerm,
  setSearchTerm,
  items,
  setItems
}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfItems, setnumberOfItems] = useState(0);

  // Fetching books with axios, and getting results depending if we're seraching book titles or authors
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        // Spiner ON
        setLoading(true);
        // Search titles or authors
        const searchResponse = await API.get(
          `search.json?${category}=${searchTerm}`
        );
        console.log(searchResponse.data.docs);
        // Updating state
        setBooks(searchResponse.data.docs);
        setnumberOfItems(searchResponse.data.docs.lenth);
        // Spinner OFF
        setLoading(false);
      } catch (err) {
        // Erors
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
      {!searchTerm ? <Video /> : null}

      <Wrapper style={{ display: "flex" }}>
        {/* Select authors or titles*/}
        <Category category={category} setCategory={setCategory} />
        <SearchBar
          category={category}
          setSearchTerm={setSearchTerm}
          setItems={setItems}
        />
      </Wrapper>
      {/* Displaying results in grid */}
      <BooksGrid
        loading={loading}
        searchTerm={searchTerm}
        numberOfItems={numberOfItems}
        items={items}
        setItems={setItems}
      >
        {/* Mapping results and pushing values to Book component */}
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
          .slice(0, items)}{" "}
        {/* Showing only 8 results per load, intead of pagination */}
      </BooksGrid>
    </>
  );
};

export default Home;

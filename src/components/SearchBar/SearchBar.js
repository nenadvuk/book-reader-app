import { useState, useEffect } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
// Styles
import { Wrapper, Content } from "./SearchBarStyles";

const SearchBar = ({ category, setSearchTerm, setItems }) => {
  const [state, setState] = useState("");
  useEffect(() => {
    const listener = (event) => {
      // If user press Enter key were setting the Search term
      if (event.keyCode === 13 || event.code === "NumpadEnter") {
        event.preventDefault();
        setSearchTerm(state);
        setItems(8); /* Reseting items to default value */
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
      clearTimeout();
    };
  }, [setSearchTerm, state, category, setItems]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder={
            category === "author" ? "Search Authors..." : "Search Titles..."
          }
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;

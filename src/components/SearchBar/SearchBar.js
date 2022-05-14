import { useState, useEffect } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
// Styles
import { Wrapper, Content } from "./SearchBarStyles";

const SearchBar = ({ category, setSearchTerm }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const listener = (event) => {
      if (event.keyCode === 13 || event.code === "NumpadEnter") {
        event.preventDefault();
        setSearchTerm(state);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
      clearTimeout();
    };
  }, [setSearchTerm, state]);

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

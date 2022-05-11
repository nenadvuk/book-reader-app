import { useState, useEffect} from 'react';
// Image
import searchIcon from "../../images/search-icon.svg";
// Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {

  const [state, setState] = useState("");

  useEffect(() => {
    
    const listener = (event) => {
      if (event.keyCode === 13 || event.code === "NumpadEnter") {
        event.preventDefault();
        setTimeout(() => {
          setSearchTerm(state);
        }, 300);
        // clearTimeout()
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
          placeholder="Search..."
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar
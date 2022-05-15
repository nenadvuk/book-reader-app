// Router
import { Link } from "react-router-dom";
// Styled components
import { Wrapper, Image, Content, Text } from "./HeaderStyle";
// Components
import Logo from "../../images/logo.png";
import { Button } from "@mui/material";

const Header = ({ setCategory, setSearchTerm, setItems }) => {
  // Rerender home page without reloading-resetin states
  const handleClick = () => {
    setCategory("author");
    setSearchTerm("");
    setItems(8);
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <div className="flex">
            <Image onClick={handleClick} src={Logo} />{" "}
            <Text>Book Reader App</Text>
          </div>
        </Link>
        <Link to="/my-page">
          <Button variant="contained">My Page</Button>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;

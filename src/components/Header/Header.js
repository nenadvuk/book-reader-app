import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Image, Content, Text } from "./HeaderStyle";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Image src={Logo} />
        </Link>
        <Text>Book Reader App</Text>
      </Content>
    </Wrapper>
  );
};

export default Header;
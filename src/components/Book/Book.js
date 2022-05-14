import React from "react";
import NoImage from "../../images/no-image.jpg";
import { Wrapper, Image } from "./BookStyle";
import { Link } from "react-router-dom";

const Book = ({
  author,
  title,
  editionCount,
  posterUrl,
  authorKey,
  bookKey
}) => {
  return (
    <Wrapper>
      <h3>{author[0]}</h3>
      <h2>{title}</h2>
      <Link to={`${bookKey}`}>
        <Image
          src={
            posterUrl
              ? `https://covers.openlibrary.org/b/id/${posterUrl}-L.jpg`
              : NoImage
          }
        />
      </Link>
      <p>Editions: {editionCount}</p>
    </Wrapper>
  );
};

export default Book;

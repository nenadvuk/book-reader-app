// Style
import { Wrapper, Image } from "./BookStyle";
// Component
import NoImage from "../../images/no-image.jpg";
// Router
import { Link } from "react-router-dom";

const Book = ({
  author,
  title,
  editionCount,
  posterUrl,
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
          alt={`${title}-image cover`}
        />
      </Link>
      <p>Editions: {editionCount}</p>
    </Wrapper>
  );
};

export default Book;

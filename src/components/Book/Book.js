// Style
import { Wrapper, Image } from "./BookStyle";
// Component
import NoImage from "../../images/no-image.jpg";
// Router
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

const Book = ({
  author,
  title,
  editionCount,
  posterUrl,
  bookKey,
  passedDeleteButton
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
      {editionCount ? <p>Editions: {editionCount}</p> : null}
      {passedDeleteButton ? (
        <Box
          onClick={function () {
            console.log("ok");
            localStorage.removeItem(bookKey);
          }}
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <Fab color="error">
            <DeleteIcon />
          </Fab>
        </Box>
      ) : null}
    </Wrapper>
  );
};

export default Book;

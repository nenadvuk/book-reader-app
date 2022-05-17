import { useState } from "react";
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
  // State which is used for removing an item from my list, along with deleting it from local storage
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <Wrapper>
      {/* If isDeleted === false, book details will be shown, otherwise, when we click delete state changes to true and book will not be visible anymore */}
      {!isDeleted && (
        <div>
          <h3>{author[0]}</h3>
          <h2>{title}</h2>
          {console.log(bookKey)}
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
                localStorage.removeItem(bookKey);
                setIsDeleted(true);
              }}
              sx={{ "& > :not(style)": { m: 1 } }}
            >
              <Fab color="error">
                <DeleteIcon />
              </Fab>
            </Box>
          ) : null}
        </div>
      )}
    </Wrapper>
  );
};

export default Book;

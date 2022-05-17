import { useState } from "react";
// Style
import { Wrapper, Image, ButtonContainer } from "./BookStyle";
// Component
import NoImage from "../../images/no-image.jpg";
import TransitionsModal from "../Modal/Modal";
// Router
import { Link } from "react-router-dom";
// Mui
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";


const Book = ({
  author,
  title,
  editionCount,
  posterUrl,
  bookKey,
  passedDeleteButton,
  passedReadButton,
  passedNoteButton
}) => {
  // State which is used for removing an item from my list, along with deleting it from local storage
  const [isDeleted, setIsDeleted] = useState(false);
  const [haveRead, setHaveRead] = useState(false);

  const lStorageItems = JSON.parse(window.localStorage.getItem(bookKey));

  return (
    <Wrapper>
      {/* If isDeleted === false, book details will be shown, otherwise, when we click delete state changes to true and book will not be visible anymore */}
      {!isDeleted && (
        <div>
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
          <ButtonContainer>
            {passedDeleteButton ? (
              <Box
                onClick={function () {
                  localStorage.removeItem(bookKey);
                  setIsDeleted(true);
                }}
                sx={{ "& > :not(style)": { m: 1 } }}
                title="Delete From Your List"
              >
                <Fab style={{ height: "35px", width: "35px" }} color="error">
                  <DeleteIcon />
                </Fab>
              </Box>
            ) : null}
            {passedNoteButton && lStorageItems.note !== "" ? (
              <TransitionsModal bookKey={bookKey} />
            ) : null}
            {passedReadButton ? (
              <Box
                onClick={function () {
                  let bookRead = JSON.parse(localStorage.getItem(bookKey));
                  bookRead.haveRead = !haveRead;
                  localStorage.setItem(bookKey, JSON.stringify(bookRead));
                  setHaveRead(!haveRead);
                }}
                sx={{ "& > :not(style)": { m: 1 } }}
              >
                <Fab
                  style={{ height: "35px", width: "35px" }}
                  color={!haveRead ? "error" : "success"}
                  title="Did You Read This Book"
                >
                  {!haveRead ? (
                    <CancelTwoToneIcon />
                  ) : (
                    <CheckCircleOutlineTwoToneIcon />
                  )}
                </Fab>
              </Box>
            ) : null}
          </ButtonContainer>
        </div>
      )}
    </Wrapper>
  );
};

export default Book;

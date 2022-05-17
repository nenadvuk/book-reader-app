import { useState, useEffect } from "react";
// Style
import { Wrapper, Content, Text, Image, ButtonBox } from "./BookInfoStyle";
// Router
import { useParams } from "react-router-dom";
// Components
import { Spinner } from "../Spinner/Spinner.styles";
import NoImage from "../../images/no-image.jpg";
import InfoBar from "../InfoBar/InfoBar";
// Mui
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';
// Axios
import axios from "axios";

const BookInfo = () => {
  const { bookId } = useParams(); /* Grabbing param from url, using router */
  const [bookDetails, setbookDetails] = useState(
    []
  ); /* Storing results here  */
  const [loading, setLoading] = useState(true);
  const [bookAdded, setBookAdded] = useState(false);

  // Fetching book which user have clicked with axios, and getting their details
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${bookId}`);
        setbookDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    // Checking if the book is stored on local storage with foor loop, if true we are updating "bookAdded" state and sending it also to Infobar Component
    const isTheBookOnMyList = () => {
      for (let i = 0; i < Object.entries(localStorage).length; i++) {
        if (bookDetails.key === Object.entries(localStorage)[i][0]) {
          setBookAdded(true);
        }
      }
    };
    fetchBookDetails();
    isTheBookOnMyList();
  }, [bookId, bookDetails.key]);

  return (
    <Wrapper>
      {loading && <Spinner />}
      <InfoBar
        className="fadeIn"
        title={bookDetails.title}
        BookKey={bookDetails.key}
        bookAdded={bookAdded}
      />
      {console.log(bookDetails)}
      {!loading && (
        <Content>
          <Image
            src={
              bookDetails.covers
                ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`
                : NoImage
            }
          />
          <Text>
            <h4 className="slideInDown" style={{ animationDelay: "1.5s" }}>
              Description
            </h4>

            <p className="slideInDown" style={{ animationDelay: "1.7s" }}>
              {bookDetails.description
                ? bookDetails.description.value
                  ? bookDetails.description.value.slice(0, 800)
                  : bookDetails.description.slice(0, 800)
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <div className="publish-info">
              <div className="fadeIn" style={{ animationDelay: "1.8s" }}>
                <h4>First Published</h4>
                <p>
                  {bookDetails.first_publish_date
                    ? bookDetails.first_publish_date
                    : "No data"}
                </p>
              </div>
              <div className="fadeIn" style={{ animationDelay: "2s" }}>
                <h4>Revisions</h4>
                <p>{bookDetails.revision ? bookDetails.revision : "No data"}</p>
              </div>
              <div className="fadeIn" style={{ animationDelay: "2.2s" }}>
                <h4>Edition Created</h4>
                <p>
                  {/* Showing first 10 letters of string */}
                  {bookDetails.created.value
                    ? bookDetails.created.value.slice(0, 10)
                    : bookDetails.created.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="subjects">
              {bookDetails.subjects &&
                bookDetails.subjects.slice(0, 5).map((subject, i) => (
                  <span
                    style={{
                      animationDelay: `2.${i}s`,
                      animationDuration: ".8s"
                    }}
                    className="zoomIn subjects_item"
                    key={i}
                  >
                    {subject}
                  </span>
                ))}
            </div>
          </Text>
        </Content>
      )}
      <ButtonBox>
      <Button
            style={{
              marginTop:"17px",
              height:40,
              borderRadius: 5,
              backgroundColor: "var(--medGrey)",
            }}
            variant="contained"
            // color="success"
            endIcon={<EventNoteIcon/>}
          >
            View Note
          </Button>
        <Box
          onClick={function () {
            const localStorageItems = {
              title: bookDetails.title,
              haveRead: false,
              authorKey: bookDetails.authors
                ? bookDetails.authors[0].author.key
                : null,
              covers: bookDetails.covers ? bookDetails.covers[0] : null
            };
            // Depending if we add to, or remove book from our list, we also adding or removing it from local storage and updating infobar
            !bookAdded
              ? localStorage.setItem(
                  bookDetails.key,
                  JSON.stringify(localStorageItems)
                )
              : localStorage.removeItem(bookDetails.key, localStorageItems);
            setBookAdded(!bookAdded);
          }}
          className="fadeIn"
          style={{ animationDelay: "3s" }}
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <Fab
            // disabled
            color={!bookAdded ? "success" : "error"}
            title={
              !bookAdded
                ? "Add Book To Your Collection"
                : "Remove Book From Your Collection"
            }
            aria-label="add"
          >
            {!bookAdded ? "ADD" : <DeleteIcon />}
          </Fab>
        </Box>
      </ButtonBox>
    </Wrapper>
  );
};

export default BookInfo;

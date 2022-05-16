import { useState, useEffect } from "react";
// Style
import { Wrapper, Content, Text, Image, Button } from "./BookInfoStyle";
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
// API
import API from "../../API";

const BookInfo = () => {
  const { bookId } = useParams(); /* Grabbing param from url, using router */
  const [bookDetails, setbookDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookAdded, setBookAdded] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await API.get(`works/${bookId}`);
        setbookDetails(response.data);
        // console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    // Checking if the book is stored on local storage with foor loop
    const isTheBookOnMyList = () => {
      for (let i = 0; i < Object.entries(localStorage).length; i++) {
        if (bookDetails.key === Object.entries(localStorage)[i][0]) {
          setBookAdded(true);
        }
      }
    };
    isTheBookOnMyList();
    fetchBookDetails();
  }, [bookId, bookDetails, bookAdded]);

  return (
    <Wrapper>
      {loading && <Spinner />}
      {console.log(bookAdded)}
      <InfoBar
        className="fadeIn"
        title={bookDetails.title}
        BookKey={bookDetails.key}
        bookAdded={bookAdded}
      />

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
      <Button
        onClick={function () {
          // Depending if we add to, or remove book from our list, we also adding or removing it from local storage and updating infobar
          !bookAdded
            ? localStorage.setItem(bookDetails.key, bookDetails.title)
            : localStorage.removeItem(bookDetails.key, bookDetails.title);
          setBookAdded(!bookAdded);
        }}
        className="fadeIn"
        style={{ animationDelay: "2.5s" }}
      >
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
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
      </Button>
    </Wrapper>
  );
};

export default BookInfo;

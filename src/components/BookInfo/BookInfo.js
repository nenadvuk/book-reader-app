import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner.styles";
import { Wrapper, Content, Text, Image } from "./BookInfoStyle";
import NoImage from "../../images/no-image.jpg"

// API
import API from "../../API";

const BookInfo = () => {
  const { bookId } = useParams();
  const [bookDetails, setbookDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await API.get(`works/${bookId}`);
        setbookDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  return (
    <Wrapper>
      {loading && <Spinner />}
      {console.log(bookDetails)}
      {/* Waiting for  */}
      {!loading && (
        <Content>
          <Image
          src={
            bookDetails.covers
              ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`
              : NoImage
          }
          clickable={false}
        />
          <Text>
            <h4>Description</h4>
            <p>
              {bookDetails.description.value
                ? bookDetails.description.value
                : bookDetails.description}
            </p>
            <h4>First Published</h4>
            <p>
              {bookDetails.first_publish_date
                ? bookDetails.first_publish_date
                : "No data"}
            </p>
          </Text>
        </Content>
      )}
    </Wrapper>
  );
};

export default BookInfo;

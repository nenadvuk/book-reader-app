import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner.styles";

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
    <div>
      {loading && <Spinner />}
      {console.log(bookDetails)}
      {/* Waiting for  */}
      {!loading && (
        <div>
          {console.log('ok')}
          <h4>Description</h4>
          <p>{bookDetails.description.value}</p>
          <h4>First Published</h4>
          <p>{bookDetails.first_publish_date ? bookDetails.first_publish_date : "No data"}</p>
        </div>
      )}

      {/* <p>{bookDetails.description.value}</p> */}
      {/* {bookDetails.map((bookDetail, i) => (
        <div>
        
        <p>{bookDetail.description.value ? bookDetail.description.value : bookDetail.description }</p>
        </div>
      ))} */}
    </div>
  );
};

export default BookInfo;

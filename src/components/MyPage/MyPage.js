import { useState, useEffect } from "react";

// Components
import BooksGrid from "../BooksGrid/BooksGrid";
import { Spinner } from "../Spinner/Spinner.styles";
import NoImage from "../../images/no-image.jpg";

// Api
import API from "../../API";

const MyPage = () => {
  const [array, setArray] = useState([]);
  const [bookDetails, setbookDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  let arr = [];
  for (let [key, value] of Object.entries(localStorage)) {
    arr.push({ key, value });
  }

  // const bookId = Object.entries(localStorage)[0][0]

  // This is the only solution I've figured out how to render page when local storage is updated
  window.addEventListener("storage", () => {
    setArray(arr);
  });
  console.log(array);
  // useEffect(() => {
  //   const fetchBookDetails = async () => {
  //     try {
  //       const response = await API.get(bookId);
  //       console.log(response.data);
  //       setbookDetails(response.data);
  //       console.log(bookDetails);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchBookDetails()
  // }, []);

  return (
    <div>
      <ul>
        {arr.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
      <BooksGrid></BooksGrid>
    </div>
  );
};

export default MyPage;

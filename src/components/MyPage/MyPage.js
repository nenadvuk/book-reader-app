import { useState, useEffect } from "react";

// Components
import BooksGrid from "../BooksGrid/BooksGrid";
import { Spinner } from "../Spinner/Spinner.styles";
import NoImage from "../../images/no-image.jpg";
import Book from "../Book/Book";



// Axios
// import axios from "axios";

const MyPage = () => {
  const [array, setArray] = useState([]);
  const [bookDetails, setbookDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  let arr = [];
  for (let [key, value] of Object.entries(localStorage)) {
    arr.push({ key, value });
  }

  // This is the only solution I've figured out how to render page when local storage is updated
  window.addEventListener("storage", () => {
    setArray(arr);
  });
  
  
  
  
  
  // useEffect(() => {
  // },[arr])



  

  // let bookId
  // const bookId = Object.entries(localStorage)[0][0];

  // bookId = Object.entries(localStorage)[0][0]

  // console.log(array);
  // useEffect(() => {
  //   const fetchBookDetails = async () => {
  //     try {
  //       const response = await axios.get(bookId);
  //       console.log(response.data);
  //       setbookDetails(response.data);
  //       // console.log(bookDetails);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchBookDetails();
  // }, [bookId]);

  return (
    <div>
      <BooksGrid>
        {arr.map((item, i) => (
          <Book
            key={i}
            author={""}
            title={JSON.parse(item.value).title}
            bookKey={item.key}
            posterUrl={JSON.parse(item.value).covers}
            editionCount={null}
            passedDeleteButton={true}
          />
          // console.log(JSON.parse(item.value).title)
          // console.log(JSON.parse(item.value).authorKey)
          // console.log(JSON.parse(item.value).haveRead)
          // console.log(JSON.parse(item.value).covers)
          // <Book key={i} author={""} title={item.value} bookKey={item.key} editionCount={null}/>
          // <li key={item.key}>{item.value}</li>
        ))}
        
      </BooksGrid>
    </div>
  );
};

export default MyPage;

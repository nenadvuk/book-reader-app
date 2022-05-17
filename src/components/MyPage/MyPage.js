import { useState} from "react";

// Components
import BooksGrid from "../BooksGrid/BooksGrid";
import Book from "../Book/Book";


const MyPage = () => {
  const [array, setArray] = useState([]);

  let arr = [];
  for (let [key, value] of Object.entries(localStorage)) {
    arr.push({ key, value });
  }
  
  // This is the only solution I've figured out how to render page when local storage is updated
  window.addEventListener("storage", () => {
    setArray(arr);
  });
  console.log(array);

  return (
    <div>
      {localStorage ? (
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
            passedReadButton={true}
            passedNoteButton={true}
          />
        ))}
        
      </BooksGrid>
      ):null}
      
    </div>
  );
};

export default MyPage;

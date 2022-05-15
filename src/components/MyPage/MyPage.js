import React from "react";

const MyPage = () => {
  {
    let retrievedObject = localStorage.getItem("Book-details");
    console.log("Book-details: ", JSON.parse(retrievedObject));
  }
  return <div>MyPage</div>;
};

export default MyPage;

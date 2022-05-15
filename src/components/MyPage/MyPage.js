import { useState } from "react";

const MyPage = () => {
  const [array, setArray] = useState([]);
  let arr = [];
  for (let [key, value] of Object.entries(localStorage)) {
    arr.push({ key, value });
    
  }
  window.addEventListener('storage', () => {
    setArray(array)
    setArray(arr);
    
  });
  
  return (
    <div>
      <ul>
        {arr.map((item) => (
          <li key={item.key}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyPage;

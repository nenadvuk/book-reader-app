import { useState } from "react";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Home from "./components/Home";
import BookInfo from "./components/BookInfo/BookInfo";
import MyPage from "./components/MyPage/MyPage";
// Global Styling
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const [category, setCategory] = useState("author");
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState(8);

  return (
    <Router>
      <Header
        setCategory={setCategory}
        setSearchTerm={setSearchTerm}
        setItems={setItems}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              category={category}
              setCategory={setCategory}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              items={items}
              setItems={setItems}
            />
          }
        />
        <Route path="/works/:bookId" element={<BookInfo />} />
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};
export default App;

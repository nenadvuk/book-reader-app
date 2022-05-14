// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import BookInfo from "./components/BookInfo/BookInfo";
// Styling
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:bookId" element={<BookInfo />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Router>
  );
};
export default App;

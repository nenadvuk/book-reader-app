// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";

// Styling
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    <GlobalStyle />
  </Router>
);

export default App;

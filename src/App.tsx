import "./App.css";
import HelmetMetaTag from "./components/Helmet/Helmet";
import Navbar from "./components/Navbar/page/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/page/Home";
import About from "./pages/About/page/About";
import Projects from "./pages/Projects/page/Projects";
import Contact from "./pages/Contacts/page/Contact";
import Page404 from "./pages/Page404/page/Page404";
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <HelmetMetaTag />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <BackToTop />
      <Footer />
    </Router>
  );
}

export default App;

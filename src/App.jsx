import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./components/About/About";
import ContactForm from "./components/ContactForm/ContactForm";
import Services from "./components/Services/Services";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

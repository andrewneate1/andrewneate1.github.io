import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";

const links = [
  { text: "Home", link: "/" },
  { text: "Experience", link: "/experience" },
  { text: "Projects", link: "/projects" },
  { text: "Contact", link: "/contact" },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar links={links} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

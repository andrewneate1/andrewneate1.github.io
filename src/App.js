import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import CurrencyConverter from "./Components/Projects/CurrencyConverter/CurrencyConverter";
import MarkdownEditor from "./Components/Projects/MarkdownEditor/MarkdownEditor";
import ToDo from "./Components/Projects/ToDoList/ToDo";

const links = [
  { text: "Home", link: "/" },
  { text: "Experience", link: "/experience" },
  { text: "Projects", link: "/projects/currencyConverter" },
  { text: "Contact", link: "/contact" },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar title="Andrew Neate Portfolio" links={links} type="primary" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/projects/currencyConverter"
              element={<CurrencyConverter />}
            />
            <Route
              path="/projects/markDownEditor"
              element={<MarkdownEditor />}
            />
            <Route path="/projects/toDoList" element={<ToDo />} />
          </Routes>
        </header>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

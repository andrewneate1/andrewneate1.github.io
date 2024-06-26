import React from "react";
import ContactFooter from "../Components/Projects/ContactFooter/ContactFooter";
import Navbar from "../Components/Navbar/Navbar";

const projectLinks = [
  { text: "Currency Converter", link: "/projects/currencyConverter" },
  { text: "Markdown Editor", link: "/projects/markdownEditor" },
  { text: "ToDo List", link: "/projects/toDoList" },
];

const Projects = () => {
  return (
    <div className="mainBody">
      <Navbar links={projectLinks} type="secondary" />
      <ContactFooter />
    </div>
  );
};

export default Projects;

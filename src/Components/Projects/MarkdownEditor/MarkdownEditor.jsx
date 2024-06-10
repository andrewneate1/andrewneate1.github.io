import React from "react";
import Navbar from "../../Navbar/Navbar";

const projectLinks = [
  { text: "Currency Converter", link: "/projects/currencyConverter" },
  { text: "Markdown Editor", link: "/projects/markdownEditor" },
  { text: "ToDo List", link: "/projects/toDoList" },
];

const MarkdownEditor = () => {
  return (
    <div>
      <Navbar links={projectLinks} type="secondary" />
      Markdown Editor
    </div>
  );
};

export default MarkdownEditor;

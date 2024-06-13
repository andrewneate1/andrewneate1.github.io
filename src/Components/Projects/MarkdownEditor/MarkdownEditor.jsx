import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import MarkedInput from "./MarkedInput";
import Result from "./Result";
import EditorContext from "./EditorContext";
import "./Markdown.css";

const projectLinks = [
  { text: "Currency Converter", link: "/projects/currencyConverter" },
  { text: "Markdown Editor", link: "/projects/markdownEditor" },
  { text: "ToDo List", link: "/projects/toDoList" },
];

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <div>
      <Navbar links={projectLinks} type="secondary" />
      <EditorContext.Provider value={contextValue}>
        <div className="card align-items-center shadow container px-5 my-5">
          <div className="card-body">
            <div className="display-3 fw-bolder mb-3">
              <h1 className="text-gradient d-inline">Markdown Editor</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div className="card shadow border-1 rounded-4 m-3 mt-0">
                <div className="card-body p-5">
                  <MarkedInput />
                </div>
              </div>
              <div className="card shadow border-1 rounded-4 m-3 mt-0">
                <div className="card-body p-5">
                  <Result />
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditorContext.Provider>
    </div>
  );
};

export default MarkdownEditor;

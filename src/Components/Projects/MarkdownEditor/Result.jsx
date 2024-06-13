import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import EditorContext from "./EditorContext";

const Result = () => {
  const { markdownText } = useContext(EditorContext);
  return (
    <div className="Container">
      <h1>Converted Text</h1>
      <hr />
      <div className="Result-Area">
        <ReactMarkdown children={markdownText} className="WhiteSpace" />
      </div>
    </div>
  );
};

export default Result;

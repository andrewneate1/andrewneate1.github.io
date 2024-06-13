import React, { useContext } from "react";
import EditorContext from "./EditorContext";

const MarkedInput = (props) => {
  const { setMarkdownText } = useContext(EditorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <div className="container">
      <h1>Markdown Text</h1>
      <hr />
      <textarea className="textArea" onChange={onInputChange} />
    </div>
  );
};

export default MarkedInput;

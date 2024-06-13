import React from "react";

const defaultContext = {
  markDownText: "",
  setMarkdownText: () => {},
};

export default React.createContext(defaultContext);

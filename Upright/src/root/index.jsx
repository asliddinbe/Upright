import { BrowserRouter } from "react-router-dom";
import React from "react";
import App from "../containers/App";

export default () => {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
};

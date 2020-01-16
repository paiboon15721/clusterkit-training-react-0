import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "./components/CommentBox";

const App = () => (
  <div className="container mt-4">
    <CommentBox />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

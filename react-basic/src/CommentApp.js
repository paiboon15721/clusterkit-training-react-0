import React from "react";
import CommentBox from "./components/CommentBox";

const App = () => (
  <div className="container mt-4">
    <div className="row">
      <div className="col">
        <CommentBox />
      </div>
      <div className="col">
        <CommentBox />
      </div>
    </div>
  </div>
);

export default App;

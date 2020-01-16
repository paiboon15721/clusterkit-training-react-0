import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentBox = () => {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const loadedComments = res.data.map(v => `${v.name} ${v.phone}`);
      setComments(loadedComments);
    });
  }, []);

  const handleTextChange = e => {
    setCurrentComment(e.target.value);
  };

  const handleSubmit = () => {
    setComments([currentComment, ...comments]);
    setCurrentComment("");
  };

  return (
    <>
      <div className="form-group">
        <textarea
          value={currentComment}
          onChange={handleTextChange}
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group">
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
      {comments.map((v, k) => (
        <div key={k} className="alert alert-primary" role="alert">
          {v}
        </div>
      ))}
    </>
  );
};
export default CommentBox;

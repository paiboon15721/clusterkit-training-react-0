import React, { useState } from "react";

const CommentBox = () => {
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleTextChange = e => {
    setCurrentComment(e.target.value);
  };

  const handleSubmit = () => {
    setComments([...comments, currentComment]);
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
      {comments.map(v => (
        <div className="alert alert-primary" role="alert">
          {v}
        </div>
      ))}
    </>
  );
};
export default CommentBox;

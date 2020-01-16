import React, { useRef, useEffect } from "react";

const App = () => {
  const username = useRef(null);
  const pwd = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    const logObj = {
      username: username.current.value,
      password: pwd.current.value
    };

    console.log(logObj);
  };

  useEffect(() => {
    pwd.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          ref={username}
          defaultValue="my default"
          className="form-control"
          placeholder="username"
        />
      </div>
      <div className="form-group">
        <input ref={pwd} className="form-control" placeholder="password" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default App;

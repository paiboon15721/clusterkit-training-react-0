import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const themeContext = createContext();

const themes = ["primary", "warning", "danger", "success"];

const CommentItem = props => {
  const { theme } = useContext(themeContext);
  return (
    <div className={`alert alert-${theme}`} role="alert">
      {props.post}
    </div>
  );
};

const CommentList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts(res.data);
    });
  }, []);

  return posts.map((v, k) => <CommentItem key={k} post={v.body} />);
};

const ThemeApp = () => {
  return (
    <>
      <div className="row">
        <themeContext.Consumer>
          {({ theme, handleChangeTheme }) => (
            <>
              <div className="col">
                <span className={`badge badge-${theme}`}>{theme}</span>
              </div>
              <div className="col">
                <button
                  onClick={handleChangeTheme}
                  className={`btn btn-${theme}`}
                >
                  Change Theme
                </button>
              </div>
            </>
          )}
        </themeContext.Consumer>
      </div>
      <div className="row mt-3">
        <div className="col">
          <CommentList />
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [theme, setTheme] = useState(0);

  const handleChangeTheme = () => {
    let i = theme + 1;
    if (i >= themes.length) {
      i = 0;
    }
    setTheme(i);
  };

  return (
    <themeContext.Provider value={{ theme: themes[theme], handleChangeTheme }}>
      <ThemeApp />
    </themeContext.Provider>
  );
};

export default App;

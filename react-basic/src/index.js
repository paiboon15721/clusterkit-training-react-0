import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CommentApp from "./pages/CommentApp";
import Hello from "./pages/Hello";
import ReactUse from "./pages/ReactUse";

export const menus = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/comment-app",
    name: "Comment App",
    component: CommentApp
  },
  {
    path: "/hello-app",
    name: "Hello App",
    component: Hello
  },
  {
    path: "/react-use",
    name: "React Use",
    component: ReactUse
  }
];

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {menus.map(v => (
          <Route key={v.path} path={v.path}>
            <v.component />
          </Route>
        ))}
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CommentApp from "./pages/CommentApp";
import Hello from "./pages/Hello";
import ReactUse from "./pages/ReactUse";
import UserTable from "./pages/UserTable";
import LoginForm from "./pages/LoginForm";
import UncontrolForm from "./pages/UncontrolForm";
import EditCompanyName from "./pages/EditCompanyName";
import "antd/dist/antd.css";

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
  },
  {
    path: "/user-table",
    name: "User Table",
    component: UserTable
  },
  {
    path: "/login-form",
    name: "Login form",
    component: LoginForm
  },
  {
    path: "/uncontrol-form",
    name: "Uncontrol form",
    component: UncontrolForm
  },
  {
    path: "/edit-company-name",
    name: "Edit Company Name",
    component: EditCompanyName
  }
];

const App = () => {
  const [companyName, setCompanyName] = useState("ClusterKit");
  return (
    <Router>
      <Layout companyName={companyName}>
        <Switch>
          {menus.map(v => (
            <Route key={v.path} path={v.path}>
              {v.path === "/edit-company-name" ? (
                <v.component
                  companyName={companyName}
                  setCompanyName={setCompanyName}
                />
              ) : (
                <v.component />
              )}
            </Route>
          ))}
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

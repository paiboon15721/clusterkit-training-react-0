import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CommentApp from "./pages/CommentApp";
import ReactUse from "./pages/ReactUse";
import UserTable from "./pages/UserTable";
import LoginForm from "./pages/LoginForm";
import UncontrolForm from "./pages/UncontrolForm";
import EditCompanyName from "./pages/EditCompanyName";
import Context from "./pages/Context";
import ReduxTest from "./pages/ReduxTest";
import MoreRedux from "./pages/MoreRedux";
import { CompanyProvider } from "./stores/company";
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
  },
  {
    path: "/context",
    name: "Context",
    component: Context
  },
  {
    path: "/redux-test",
    name: "Redux Test",
    component: ReduxTest
  },
  {
    path: "/more-redux",
    name: "More Redux",
    component: MoreRedux
  }
];

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
}

let store = createStore(counter);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <CompanyProvider>
          <Layout>
            <Switch>
              {menus.map(v => (
                <Route key={v.path} path={v.path}>
                  <v.component />
                </Route>
              ))}
              <Route path="/">
                <Redirect to="/dashboard" />
              </Route>
            </Switch>
          </Layout>
        </CompanyProvider>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

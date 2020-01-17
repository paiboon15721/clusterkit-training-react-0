import React, { useEffect } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import axios from "axios";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone"
  }
];

const App = props => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <Table loading={props.loading} columns={columns} dataSource={props.users} />
  );
};

const mapStateToProps = function(state) {
  return {
    users: state.user.users,
    loading: state.user.loading
  };
};

const mapDispatchToProps = {
  fetchUsers: function() {
    return function(dispatch) {
      dispatch({ type: "FETCH_USERS" });
      axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: res.data });
      });
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

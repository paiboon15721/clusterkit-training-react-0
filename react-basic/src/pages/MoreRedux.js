import React from "react";
import { connect } from "react-redux";
import { Progress } from "antd";

const App = props => {
  return (
    <div>
      <Progress type="circle" percent={props.counter} />
      <button
        className="btn btn-primary"
        onClick={() => props.dispatch({ type: "INCREMENT", payload: 1 })}
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => props.dispatch({ type: "DECREMENT", payload: 1 })}
      >
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = function(state) {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(App);

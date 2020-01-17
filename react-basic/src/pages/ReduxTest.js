import React from "react";
import { connect } from "react-redux";

const ShowCounter = props => {
  return (
    <div>
      <h1>{props.counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => props.dispatch({ type: "INCREMENT", payload: 5 })}
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => props.dispatch({ type: "DECREMENT", payload: 5 })}
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

export default connect(mapStateToProps)(ShowCounter);

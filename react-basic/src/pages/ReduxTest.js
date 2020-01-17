import React from "react";
import { connect } from "react-redux";

const ShowCounter = props => {
  return (
    <div>
      <h1>{props.counter}</h1>
      <button className="btn btn-primary" onClick={() => props.increment(5)}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => props.decrement(5)}>
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = function(state) {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = {
  increment: function(v) {
    return {
      type: "INCREMENT",
      payload: v
    };
  },
  decrement: function(v) {
    return {
      type: "DECREMENT",
      payload: v
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCounter);

import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

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

const ConnectedShowCounter = connect(mapStateToProps)(ShowCounter);

const App = () => (
  <Provider store={store}>
    <ConnectedShowCounter />
  </Provider>
);

export default App;

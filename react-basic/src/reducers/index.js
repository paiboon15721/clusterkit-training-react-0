import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counter from "./counter";
import user from "./user";

const reducers = combineReducers({
  counter,
  user
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

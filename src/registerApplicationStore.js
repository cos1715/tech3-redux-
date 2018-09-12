import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import allReducers from "./reducers/index";

export default function setupStore() {
  return createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk, promise()))
  );
}

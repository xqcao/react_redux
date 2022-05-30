import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduces from "./resources";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reduces, composeEnhancers(applyMiddleware(thunk)));

export default store;

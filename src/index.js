import React from "react";
import { createRoot } from "react-dom/client";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import { searchRobotsReducer, requestRobotsReducer } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

const rootReducers = combineReducers({
  searchRobotsReducer,
  requestRobotsReducer,
});

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

registerServiceWorker();

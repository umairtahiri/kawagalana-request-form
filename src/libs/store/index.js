import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";

export default function configureStore(initialState) {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )(createStore)(reducer, initialState);

  if (module.hot) {
    module.hot.accept("./reducer", () => store.replaceReducer(reducer));
  }

  return store;
}

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import auth from "./reducers/auth";
import products from "./reducers/products";
import cart from "./reducers/cart";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";

const rootReducer = combineReducers({
  auth,
  products,
  cart,
});

const middlewares = [thunk.withExtraArgument(getFirebase)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(
  throttle(() => {
    const { auth, cart } = store.getState();
    saveState({
      auth,
      cart,
    });
  }, 1000)
);

export default store;

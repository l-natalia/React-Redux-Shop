import {
  ADD_PRODUCT_TO_CART,
  INCREMENT,
  DECREMENT,
  DELETE_ITEM,
  ADD_SHIPPING,
  CLEAR_CART,
} from "../store/constants/cart";

const addToCart = (qt, id, price) => {
  return { type: ADD_PRODUCT_TO_CART, payload: { qt, id, price } };
};

const deleteFromCart = (id, price) => {
  return { type: DELETE_ITEM, payload: id, price };
};

const incrementItemQt = (id, price) => {
  return { type: INCREMENT, payload: id, price };
};
const decrementItemQt = (id, price) => {
  return { type: DECREMENT, payload: id, price };
};

const shipping = (checkboxValue) => {
  return { type: ADD_SHIPPING, payload: checkboxValue };
};

const clearAll = () => {
  return { type: CLEAR_CART };
};

export const addProductToCart = (qt, id, price) => (dispatch) => {
  dispatch(addToCart(qt, id, price));
};

export const deleteItem = (id, price) => (dispatch) => {
  dispatch(deleteFromCart(id, price));
};

export const increment = (id, price) => (dispatch) => {
  dispatch(incrementItemQt(id, price));
};

export const decrement = (id, price) => (dispatch) => {
  dispatch(decrementItemQt(id, price));
};

export const addShipping = (checkboxValue) => (dispatch) => {
  dispatch(shipping(checkboxValue));
};
export const clearCart = () => (dispatch) => {
  dispatch(clearAll());
};

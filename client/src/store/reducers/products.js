import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../constants/products";

const initState = { data: [], loading: false, error: null };

export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START: {
      return { ...state, loading: true };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return { ...state, data: [...action.payload], loading: false };
    }
    case FETCH_PRODUCTS_FAIL: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
}

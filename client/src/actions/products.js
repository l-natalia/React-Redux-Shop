import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../store/constants/products";
import API from "../utils/API";

const getProductsFromAPI = async () => {
  const { data } = await API.get("/products");
  return data;
};

const fetchProductsStart = () => {
  return { type: FETCH_PRODUCTS_START };
};

const fetchProductsSuccess = (data) => {
  return { type: FETCH_PRODUCTS_SUCCESS, payload: data };
};

const fetchProductsFail = (error) => {
  return { type: FETCH_PRODUCTS_FAIL, payload: error };
};

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsStart());
  getProductsFromAPI()
    .then((data) => {
      dispatch(fetchProductsSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchProductsFail(error));
      alert("fetch products error", error);
    });
};

import {
  ADD_PRODUCT_TO_CART,
  DELETE_ITEM,
  INCREMENT,
  DECREMENT,
  ADD_SHIPPING,
  CLEAR_CART,
} from "../constants/cart";

const initState = { orderedProducts: [], total: 0, shipping: false };

const isProductInOrdered = (state, productId) =>
  state.orderedProducts.map((item) => item.id).includes(productId);

const updateOrderedProduct = (state, action) => {
  const { qt, product_id } = action.payload;
  const orderedProducts = [...state.orderedProducts];
  const index = orderedProducts.findIndex(
    (item) => item.product_id === product_id
  );
  orderedProducts[index].qt += qt;
  return orderedProducts;
};

const getCurrentProduct = (state, id) =>
  state.orderedProducts.find((product) => product.id === id);

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const orderedProducts = isProductInOrdered(state, action.payload.id)
        ? updateOrderedProduct(state, action)
        : [...state.orderedProducts, action.payload];

      return {
        ...state,
        orderedProducts,
        total: (state.total += action.payload.price * action.payload.qt),
      };
    }
    case DELETE_ITEM: {
      const currentProduct = getCurrentProduct(state, action.payload);
      return {
        ...state,
        total: state.total - currentProduct.price * currentProduct.qt,
        orderedProducts: state.orderedProducts.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case INCREMENT: {
      const currentProduct = getCurrentProduct(state, action.payload);
      currentProduct.qt += 1;
      return {
        ...state,
        total: state.total + currentProduct.price,
        orderedProducts: state.orderedProducts,
      };
    }
    case DECREMENT: {
      const currentProduct = getCurrentProduct(state, action.payload);
      if (currentProduct.qt > 1) {
        currentProduct.qt -= 1;
      }
      return {
        ...state,
        total: state.total - currentProduct.price,
        orderedProducts: state.orderedProducts,
      };
    }
    case ADD_SHIPPING: {
      if (action.payload) {
        return { ...state, total: state.total + 10, shipping: true };
      } else {
        return { ...state, total: state.total - 10, shipping: false };
      }
    }
    case CLEAR_CART: {
      return {
        ...state,
        orderedProducts: [],
        total: 0,
        shipping: false,
      };
    }
    default: {
      return state;
    }
  }
}

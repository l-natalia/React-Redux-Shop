import React from "react";
import { fetchProducts } from "../../../actions/products";
import { useDispatch, useSelector } from "react-redux";

export default function withProducts(WrappedComponent) {
  return (props) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);

    React.useEffect(() => {
      if (Array.isArray(products) && !products.length) {
        dispatch(fetchProducts());
      }
    }, [dispatch, products]);

    return <WrappedComponent {...props} products={products} />;
  };
}

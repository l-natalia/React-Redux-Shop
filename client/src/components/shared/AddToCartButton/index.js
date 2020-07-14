import React from "react";
import { useDispatch } from "react-redux";
import { Button, CardFooter, Input } from "reactstrap";
import { addProductToCart } from "../../../actions/cart";
import "./index.css";

const AddToCart = ({ id, price }) => {
  const [qt, setQt] = React.useState(1);

  const handleChange = (e) => {
    setQt(parseInt(e.target.value));
  };

  const increment = () => {
    setQt(qt + 1);
  };

  const decrement = () => {
    if (qt > 1) {
      setQt(qt - 1);
    }
  };

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addProductToCart(qt, id, price));
  };

  return (
    <CardFooter>
      <Button color="info" onClick={addToCart}>
        Add to Cart
      </Button>
      <i className="fa fa-minus" onClick={decrement}></i>
      <Input
        type="number"
        className="quantity"
        value={qt}
        onChange={handleChange}
      />
      <i className="fa fa-plus" onClick={increment}></i>
    </CardFooter>
  );
};

export default AddToCart;

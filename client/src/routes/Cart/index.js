import React from "react";
import { Button, Tooltip, Alert } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addShipping, clearCart } from "../../actions/cart";
import CartItem from "../../components/CartItem";
import withProducts from "../../components/shared/hoc/withProducts";
import "./index.css";

const Cart = () => {
  const dispatch = useDispatch();
  const orderedProducts = useSelector((state) => state.cart.orderedProducts);
  const total = useSelector((state) => state.cart.total);
  const shipping = useSelector((state) => state.cart.shipping);

  const handleShipping = (e) => {
    dispatch(addShipping(e.target.checked));
  };

  const [tooltip, setTooltip] = React.useState(false);
  const toggleTooltip = () => setTooltip(!tooltip);

  const [alert, setAlert] = React.useState(false);

  const postOrder = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 5000);
    dispatch(clearCart());
  };

  return (
    <>
      <Alert color="info" id="alert" isOpen={alert} className="cartAlert">
        Your Order was Successfully Submitted!
      </Alert>
      <div className="container cart">
        <div className="products">
          {orderedProducts.length > 0 ? (
            orderedProducts.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <p className="emptyCart">Your cart is empty</p>
          )}
        </div>
        <div className="total">
          <p className="price">$ {total}</p>
          <label>
            <input
              type="checkbox"
              checked={shipping}
              onChange={handleShipping}
            />
            Add Shipping Cost
            <p>
              <span id="Tooltip">
                <i className="fa fa-question" aria-hidden="true"></i>
              </span>
            </p>
            <Tooltip isOpen={tooltip} target="Tooltip" toggle={toggleTooltip}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id
              blanditiis cum non quas odio itaque labore dolore.
            </Tooltip>
          </label>
          <Button onClick={postOrder} color="info">
            Order
          </Button>
        </div>
      </div>
    </>
  );
};

export default withProducts(Cart);

import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, decrement, increment } from "../../actions/cart";
import withProducts from "../shared/hoc/withProducts";
import "./index.css";

const CartItem = ({ item: { id, qt } }) => {
  const { data } = useSelector((state) => state.products);
  const currentProduct = data.find((el) => el.id === id);

  const [modal, setModal] = React.useState(false);
  const toggleModal = () => setModal(!modal);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(id, currentProduct.price));
    toggleModal();
  };

  const handleDecrement = () => {
    qt > 1 && dispatch(decrement(id, currentProduct.price));
  };

  const handleIncrement = () => {
    dispatch(increment(id, currentProduct.price));
  };

  if (!currentProduct) {
    return null;
  }

  return (
    <div className="item">
      <img alt="product pic" src={currentProduct.url} />
      <p>{currentProduct.title}</p>
      <p>$ {currentProduct.price}</p>
      <div className="counter">
        <i
          className="fa fa-minus  fa-lg"
          aria-hidden="true"
          onClick={handleDecrement}
        ></i>
        <p>{qt}</p>
        <i
          className="fa fa-plus  fa-lg"
          aria-hidden="true"
          onClick={handleIncrement}
        ></i>
      </div>
      <i
        className="fa fa-trash  fa-lg"
        aria-hidden="true"
        onClick={toggleModal}
      ></i>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Delete this Item?</ModalHeader>
        <ModalFooter>
          <Button color="info" onClick={handleDelete}>
            Yes
          </Button>
          <Button color="danger" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default withProducts(CartItem);

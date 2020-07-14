import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { login } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const orderedProducts = useSelector((state) => state.cart.orderedProducts);

  const initVal = 0;
  const inCartItemsQt = orderedProducts.reduce(function (acc, curr) {
    return acc + curr.qt;
  }, initVal);

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const signIn = () => {
    dispatch(login());
  };

  return (
    <Navbar color="info" dark expand="md">
      <div className="container">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/">Shop</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
          <div className="menu">
            {loggedIn === true ? (
              <>
                <Link to="/MyAccount">My Account</Link>
                <Link to="/" onClick={signIn}>
                  Log Out
                </Link>
              </>
            ) : (
              <Link to="/LogIn">Log In</Link>
            )}
            <Link to="/CartView">
              Cart
              <i className="fa fa-shopping-cart fa-lg">{inCartItemsQt}</i>
            </Link>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;

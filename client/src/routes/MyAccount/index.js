import React from "react";
import UserDetails from "../../components/UserDetails";
import "./index.css";
import withProducts from "../../components/shared/hoc/withProducts";
import OrderHistory from "../../components/OrderHistory";

const MyAccount = () => {
  return (
    <div className="container my-account">
      <UserDetails />
      <OrderHistory />
    </div>
  );
};

export default withProducts(MyAccount);

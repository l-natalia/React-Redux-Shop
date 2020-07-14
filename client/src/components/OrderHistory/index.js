import React from "react";
import "./index.css";

const OrderHistory = () => {
  const orders = [
    { id: 3, date: "20.3.2020", products: [{ title: "Bear" }], total: 30 },
    {
      id: 2,
      date: "11.2.2020",
      products: [{ title: "Monkey" }, { title: "Cat" }],
      total: 90,
    },
  ];

  return (
    <div className="order-history">
      <h2>Last 2 Orders</h2>
      {orders.map((order) => {
        const { id, products, date, total } = order;
        return (
          <div className="order" key={id}>
            <p className="id">
              <span>Order nr: </span>
              {id}
            </p>
            <p className="date">
              <span>Ordered on: </span> {date}
            </p>
            <span>Ordered Products: </span>
            {products.map((item) => {
              return <p key={id}>{item.title}</p>;
            })}
            <p className="total">
              <span>Total: </span> ${total}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default OrderHistory;

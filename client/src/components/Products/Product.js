import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import AddToCartButton from "../shared/AddToCartButton";
import { Link } from "react-router-dom";
import "./index.css";

const Product = ({ item: { id, title, description, price, url } }) => {
  return (
    <div className="product">
      <Card>
        <Link
          to={{
            pathname: `/ProductDetail/${id}`,
          }}
        >
          <CardImg top width="100%" alt="product" src={url} />
        </Link>
        <CardBody>
          <CardText>
            <span className="title">{title}</span>
            <span className="price">$ {price}</span>
          </CardText>
          <CardText>
            {description.length < 20
              ? description
              : `${description.substring(0, 25)}...`}
          </CardText>
          <AddToCartButton id={id} price={price} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;

import React from "react";
import { useSelector } from "react-redux";
import { Card, CardImg, CardText, CardBody, CardHeader } from "reactstrap";
import AddToCartButton from "../../components/shared/AddToCartButton";
import "./index.css";

const ProductDetail = ({ match: { params } }) => {
  const { title, price, description, url, id } = useSelector(
    (state) => state.products.data
  ).find((product) => product.id === params.id);

  return (
    <div className="product-detail container">
      <Card>
        <CardImg top alt="product" src={url} />
        <CardBody>
          <CardHeader>
            <span>{title}</span>
            <span>$ {price}</span>
          </CardHeader>
          <CardText>{description}</CardText>
          <AddToCartButton id={id} price={price} />
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductDetail;

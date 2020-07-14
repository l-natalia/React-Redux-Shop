import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { Input, Spinner } from "reactstrap";
import withProducts from "../shared/hoc/withProducts";
import "./index.css";

const Products = ({ products }) => {
  const loading = useSelector((state) => state.products.loading);
  const [sortedProducts, setSortedProducts] = React.useState(products);

  React.useEffect(() => {
    setSortedProducts(products);
  }, [products, setSortedProducts]);

  const sortProducts = (key) => {
    let sortedProductsTemp;
    switch (key) {
      case "asc": {
        sortedProductsTemp = products.sort((product1, product2) => {
          return product1.price - product2.price;
        });
        break;
      }
      case "desc": {
        sortedProductsTemp = products.sort((product1, product2) => {
          return product2.price - product1.price;
        });
        break;
      }
      default: {
        break;
      }
    }
    setSortedProducts([...sortedProductsTemp]);
  };

  const [chosenCategory, setChosenCategory] = React.useState("");

  const filterProducts = (productsToFilter) => {
    return productsToFilter.filter((product) => {
      if (!chosenCategory) {
        return true;
      }
      if (product.category === chosenCategory) {
        return true;
      } else {
        return false;
      }
    });
  };

  const sortByPriceOptions = {
    default: {
      name: "Sort By Price",
      key: "default",
      props: {
        disabled: true,
      },
    },
    lowestToHighest: { name: "Lowest to Highest", key: "asc" },
    highestToLowest: { name: "Highest to Lowest", key: "desc" },
  };

  const categoriesOptions = {
    default: {
      name: "Choose Category",
      key: "default",
      props: {
        disabled: true,
      },
    },
    teddyBears: { name: "Teddy Bears", key: "Teddy Bears" },
    monkeys: { name: "Monkeys", key: "Monkeys" },
    cats: { name: "Cats", key: "Cats" },
    others: { name: "Other", key: "Other" },
  };

  return (
    <div className="products">
      <hr />
      <form className="container">
        <Input
          type="select"
          name="select"
          id="sortByPriceSelect"
          defaultValue={sortByPriceOptions["default"].key}
          onChange={(e) => sortProducts(e.target.value)}
        >
          {Object.keys(sortByPriceOptions).map((key) => {
            const option = sortByPriceOptions[key];
            return (
              <option {...(option.props || {})} key={key} value={option.key}>
                {option.name}
              </option>
            );
          })}
        </Input>
        <Input
          type="select"
          name="select"
          id="chooseCategory"
          onChange={(e) => setChosenCategory(e.target.value)}
          defaultValue={categoriesOptions["default"].key}
        >
          {Object.keys(categoriesOptions).map((key) => {
            const option = categoriesOptions[key];
            return (
              <option {...(option.props || {})} key={key} value={option.key}>
                {option.name}
              </option>
            );
          })}
        </Input>
      </form>
      <hr />
      <div className="container d-flex flex-wrap justify-content-around">
        {loading ? (
          <Spinner color="info" />
        ) : (
          filterProducts(sortedProducts).map((product) => (
            <Product key={product.id} item={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default withProducts(Products);

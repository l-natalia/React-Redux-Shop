const express = require("express");
const { db } = require("../../admin");

const products = express.Router();

function get(req, res) {
  db.collection("products")
    .get()
    .then((querySnapshot) => {
      const { docs } = querySnapshot;
      const items = docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        price: doc.data().price,
        url: doc.data().url,
        category: doc.data().category,
      }));
      return res.json(items);
    })
    .catch((error) => res.status(500).send(error));
}

products.get("/", get);

module.exports = products;

import React from "react";
import Header from "../../components/shared/Header";

const Default = () => {
  const content = {
    title: "Page Not Found",
    url:
      "https://firebasestorage.googleapis.com/v0/b/react-shop-4dfbc.appspot.com/o/brown-bear-plush-toy-on-bed-860882.jpg?alt=media&token=80e9c216-856a-4bda-8428-a243b40f2d2a",
  };
  return <Header content={content} />;
};

export default Default;

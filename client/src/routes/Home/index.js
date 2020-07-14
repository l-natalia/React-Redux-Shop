import React from "react";
import Header from "../../components/shared/Header";
import Products from "../../components/Products";

const Home = () => {
  const content = {
    title: "Buy a Bear",
    url:
      "https://firebasestorage.googleapis.com/v0/b/react-shop-4dfbc.appspot.com/o/Header-Background.jpg?alt=media&token=45144a1d-a11b-43e6-850d-247b131a2d5d",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culp illo, officiis ratione eveniet repellendus, laborum laboriosam exercitationem sequi quidem quam debitis accusantium sapiente tempore reiciendis eleniti quo consequatur iure.",
  };

  return (
    <>
      <Header content={content} />
      <Products />
    </>
  );
};

export default Home;

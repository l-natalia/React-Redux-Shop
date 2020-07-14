import React from "react";
import Header from "../../components/shared/Header/index.js";
import "./index.css";

const About = () => {
  const content = {
    title: "About Us",
    url:
      "https://firebasestorage.googleapis.com/v0/b/react-shop-4dfbc.appspot.com/o/teddy.jpg?alt=media&token=0a33b035-6252-49b6-b263-0bc3537cf8f3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culp illo, officiis ratione eveniet repellendus, laborum laboriosam exercitationem sequi quidem quam debitis",
  };
  return (
    <>
      <Header content={content} />
      <div className="container about d-flex justify-content-around flex-wrap">
        <div className="tile">
          <i className="fa fa-users" aria-hidden="true"></i>
          <h3>Lorem, ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            dolores in mollitia minima. A dolor suscipit porro sequi sed? Quod
            quo quaerat non voluptatem.
          </p>
        </div>
        <div className="tile">
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <h3>Dolor sit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            voluptates laborum rem animi, hic tenetur distinctio quidem deleniti
            atque!
          </p>
        </div>
        <div className="tile">
          <i className="fa fa-laptop" aria-hidden="true"></i>
          <h3>Adipisicing elit</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eos
            debitis dignissimos amet accusantium cum, iste eaque delectus minima
            ipsum saepe eligendi molestiae adipisci perspiciatis dolore laborum
            in! Id, enim?
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

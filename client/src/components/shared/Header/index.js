import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./index.css";

const Header = ({ content: { title, text, url } }) => {
  return (
    <Jumbotron style={{ backgroundImage: `url(${url})` }}>
      <Container>
        <h1 className="display-3">{title}</h1>
        <p className="lead">{text}</p>
      </Container>
    </Jumbotron>
  );
};

export default Header;

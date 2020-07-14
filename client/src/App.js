import React from "react";
import Home from "./routes/Home/";
import Cart from "./routes/Cart";
import LogIn from "./routes/LogIn";
import About from "./routes/About";
import Contact from "./routes/Contact";
import ProductDetail from "./routes/ProductDetail";
import NavBar from "./components/shared/Navbar/";
import Default from "./routes/Default/";
import Footer from "./components/shared/Footer/";
import MyAccount from "./routes/MyAccount/";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/CartView" component={Cart} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/ProductDetail/:id" component={ProductDetail} />
        <Route path="/MyAccount" component={MyAccount} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

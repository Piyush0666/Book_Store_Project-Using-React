import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookDescription from "../../components/bookdescription/BookDescription";
import Cart from "../../components/cart/Cart";
import OrderPlaced from "../../components/orderplaced/OrderPlaced";
import Orders from "../../components/orders/Orders";
import Wishlist from "../../components/wishlist/Wishlist";
import Dashboard from "../dashboard/Dashboard";

function RouterDom() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/wishlist" exact component={Wishlist} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/book" exact component={BookDescription} />
        <Route path="/orderplaced" exact component={OrderPlaced} />
      </Switch>
    </Router>
  );
}

export default RouterDom;

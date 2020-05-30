import React from "react";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/style.scss";
import appStyle from "./appStyle.module.scss";

const App = () => {
  return (
    <div className={appStyle.app}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

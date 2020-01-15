/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import HomeView from "components/HomeView";
import CoinView from "components/CoinView";
import Error from "components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="main-container">
            <Switch>
              <Route path="/" component={HomeView} exact />
              {/* <Route path="/currency/:id" component={Detail} exact /> */}
              <Route path="/currency" component={CoinView} exact />
              <Route path="/notfound" component={Error} exact />
              <Route component={Error} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

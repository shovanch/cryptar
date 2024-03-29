import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import HomeView from "components/HomeView";
import CoinView from "components/CoinView";
import Error from "components/Error";
import { CurrencyListProvider } from "contexts/CurrencyListContext";
import { ThemeProvider } from "contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <CurrencyListProvider>
        <Router>
          <div className="container">
            <Header />
            <div className="main-container">
              <Switch>
                <Route path="/" component={HomeView} exact />
                <Route path="/currency/:currId" component={CoinView} exact />
                {/* <Route path="/notfound" component={Error} exact />
                <Route component={Error} /> */}
                <Route path="/notfound" exact>
                  <Error errText="Currency not found" />
                </Route>
                <Route>
                  <Error />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </CurrencyListProvider>
    </ThemeProvider>
  );
};

export default App;

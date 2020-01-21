import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import HomeView from "components/HomeView";
import CoinView from "components/CoinView";
import NotFound from "components/NotFound";
import { CurrencyListProvider } from "components/CurrencyListContext";
import { ThemeProvider } from "components/ThemeContext";

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
                <Route path="/notfound" component={NotFound} exact />
                <Route component={NotFound} />
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

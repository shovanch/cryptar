import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import HomeView from "components/HomeView";
import CoinView from "components/CoinView";
import NotFound from "components/NotFound";
import Loading from "components/Loading";
import { CurrencyListProvider } from "components/CurrencyListContext";

const App = () => {
  // const [currencyList, setCurrencyList] = useState([]);

  // useEffect(() => {
  //   const fetchCurrencyList = () => {
  //     const url = `${API_URL}/currencies?key=${API_KEY}&attributes=id,name`;
  //     axios.get(url).then(res => {
  //       const { data } = res;
  //       setCurrencyList(data);
  //     });
  //   };

  //   fetchCurrencyList();
  // }, []);

  return (
    <CurrencyListProvider>
      <BrowserRouter>
        <div className="container">
          <Header />
          <div className="main-container">
            <Switch>
              <Route path="/" component={HomeView} exact />
              {/* <Route path="/currency/:id" component={Detail} exact /> */}
              <Route path="/currency/:id" component={CoinView} exact />
              <Route path="/notfound" component={NotFound} exact />
              <Route path="/load" component={Loading} exact />
              <Route component={Error} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CurrencyListProvider>
  );
};

export default App;

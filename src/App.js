import logo from "./logo.svg";
import "./App.css";
import Header from "./Amazon/Header";
import Banner from "./Amazon/Banner";
import Product from "./Amazon/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RelatedProducts from "./Amazon/Mirror";
import Mirror from "./Amazon/Mirror";
import TableDecorators from "./Amazon/TableDecorators";
import Bedsheets from "./Amazon/Bedsheets";
import ProductDetails from "./Amazon/ProductDetails";
import { Provider } from "react-redux";
import store from "./Amazon/Reducer";
import Cart from "./Amazon/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Banner />
            </Route>
            <Route path="/mirror" exact>
              <Header />
              <Mirror />
            </Route>
            <Route path="/decorators">
              <Header />
              <TableDecorators />
            </Route>
            <Route path="/bedsheet">
              <Header />
              <Bedsheets />
            </Route>
            <Route path="/productdetails/:name/:id">
              <Header />
              <ProductDetails />
            </Route>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;

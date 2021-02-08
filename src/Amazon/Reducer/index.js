import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const { combineReducers, createStore } = require("redux");
const root = combineReducers({
  ProductReducer,
  CartReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;

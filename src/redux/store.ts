import { createStore } from "redux";
import shopReducer from "./reducers";

export const store = createStore(shopReducer);

export default store;

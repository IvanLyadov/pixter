// import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { createStore } from "redux";

// const reducer = configureStore(rootReducer);
const store = createStore(rootReducer);

export default store;

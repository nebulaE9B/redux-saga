// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  middleware: () => [sagaMiddleware],
  reducer: rootReducer
});

sagaMiddleware.run(productSaga);
export default store;

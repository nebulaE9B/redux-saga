import { takeEvery, put } from "redux-saga/effects";
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("https://dummyjson.com/products");
  data = yield data.json();
  console.log(data.products);
  yield put({ type: SET_PRODUCT_LIST, data: data.products });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCT_LIST, getProducts);
}

export default productSaga;

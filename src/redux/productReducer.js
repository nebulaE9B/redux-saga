import { GET_PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("reducer", action);
      return [...action.data];
    default:
      return data;
  }
};

import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";
export const cartData = (data = [], action) => {
  console.log("reducer ", ADD_TO_CART);
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.data);
      return [...data, { data: action.data }];
    case REMOVE_FROM_CART:
      if (data.length > 0) {
        data.length = data.length - 1;
      }
      return [...data];
    case EMPTY_CART:
      if (data.length > 0) {
        data.length = 0;
      }
      return [...data];
    default:
      return data;
  }
};

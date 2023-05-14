export const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: "ADD_TO_CART",
    data
  };
};

export const removeFromCart = (data) => {
  console.log("action called", data);
  return {
    type: "REMOVE_FROM_CART",
    data
  };
};

export const emptyCart = (data) => {
  console.log("action called", data);
  return {
    type: "EMPTY_CART",
    data
  };
};

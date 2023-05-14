import React from "react";
import { useSelector } from "react-redux";
import CartSvg from "./CartSvg";

const Header = () => {
  const cart = useSelector((state) => state.cartData);

  console.log("Header cart ", cart);

  return (
    <div className="header">
      <div className="cart-div">
        <CartSvg />
        <span>{cart.length}</span>
      </div>
    </div>
  );
};

export default Header;

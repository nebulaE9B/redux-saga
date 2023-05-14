import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Main() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productData);

  console.log("Main from saga ", products);

  useEffect(() => {
    dispatch(productList());
  }, []);

  const product = {
    name: "Iphone",
    price: 80000,
    type: "mobile",
    color: "red"
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(addToCart(product))}>AddToCart</button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>
          RemoveFromCart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart(product))}>EmptyCart</button>
      </div>
      <div className="product-container">
        {products.map((item) => {
          return (
            <div key={item.id} className="product-item">
              <img src={item.thumbnail} alt="" />
              <div>Name : {item.title}</div>
              <div>Brand : {item.brand}</div>
              <div>Price : {item.price}</div>
              <div>Category : {item.category}</div>
              <div>Rating : {item.rating}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove From Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

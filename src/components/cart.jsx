import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";

function Cart() {
  const { cart } = useContext(store);

  return (
    <div className="cart-container">
      My cart has {cart.length} items
      <div className="cart-items">
        {cart.map((prod, index) => (
          <ProductInCart data={prod} key={index}></ProductInCart>
        ))}
      </div>
      <button className="bt-order">Place Order</button>
    </div>
  );
}

export default Cart;

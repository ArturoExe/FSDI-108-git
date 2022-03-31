import React from "react";
import "./productInCart.css";

function ProductInCart(props) {
  return (
    <div className="product-cart-container">
      <h2>{props.data.title}</h2>
      <div className="item-information">
        <h3>Price: {props.data.price}</h3>
        <h4>Qty: {props.data.quantity}</h4>
        <button className="bt-remove">REMOVE</button>
      </div>
    </div>
  );
}

export default ProductInCart;

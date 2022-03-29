import { useState, useContext } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import store from "../context/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addProdToCart = useContext(store).addProdToCart;

  const onUpdate = (value) => {
    console.log("Value updated:", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.price;
    return total.toFixed(2);
  };

  const addProduct = () => {
    //add product to context (state)
    let cartProduct = { ...props };
    cartProduct.quantity = quantity;

    addProdToCart(cartProduct);
  };

  return (
    <div className="product">
      <div className="images">
        <img src={"./img/" + props.image} />
      </div>

      <h2>{props.title}</h2>
      <div className="priceTags">
        <label>Price: ${props.price}</label>
        <label>Total: ${getTotal(quantity)}</label>
      </div>

      <QuantityPicker onChange={onUpdate}></QuantityPicker>
      <button onClick={addProduct}>Add</button>
    </div>
  );
};

export default Product;

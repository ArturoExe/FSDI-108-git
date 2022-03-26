import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const onUpdate = (value) => {
    console.log("Value updated:", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.price;
    return total.toFixed(2);
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
      <button>Buy</button>
    </div>
  );
};

export default Product;

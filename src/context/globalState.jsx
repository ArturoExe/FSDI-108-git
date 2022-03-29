import { useState } from "react";
import store from "./storeContext";

//Configure the Global state
const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});

  const addProdToCart = (prod) => {
    console.log("adding prod to state");
    let copy = [...cart];
    copy.push(prod);
    setCart(copy);
  };

  const removeProdFromCart = () => {
    console.log("removing prod from state");
    let copy = [...cart];
    copy.splice(props);
    setCart(copy);
  };

  return (
    <store.Provider
      value={{
        cart: cart,
        user: loggedUser,
        addProdToCart: addProdToCart,
        removeProdFromCart: removeProdFromCart,
      }}
    >
      {props.children}
    </store.Provider>
  );
};

export default GlobalState;

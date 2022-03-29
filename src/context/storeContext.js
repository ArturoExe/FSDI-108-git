import { createContext } from "react";

//This is the data mockup that any component can access
const store = createContext({
  cart: [],
  user: {},

  //Declare a function
  addProdToCart: () => {},
  removeProdFromCart: () => {},
});

export default store;

import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item, quantity) => {},
  removeItem: (id, quantity) => {},
  clearCart: () => {},
});

export default CartContext;

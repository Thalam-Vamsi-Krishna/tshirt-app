import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item, quantity) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + quantity }
            : prevItem
        );
      }
      return [...prevItems, { ...item, quantity: quantity }];
    });
  };

  const removeItemHandler = (id, quantity) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === id);
      if (existingItem) {
        if (existingItem.quantity === quantity) {
          return prevItems.filter((prevItem) => prevItem.id !== id);
        } else {
          return prevItems.map((prevItem) =>
            prevItem.id === id
              ? { ...prevItem, quantity: prevItem.quantity - quantity }
              : prevItem
          );
        }
      }
      return prevItems;
    });
  };

  const clearCartHandler = () => {
    setItems([]);
  };

  const cartContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

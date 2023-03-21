import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTshirt from "./components/Tshirts/AddTshirt";
import ShirtList from "./components/Tshirts/ShirtList";
import Header from "./components/Layout/Header";
import CartProvider from "./components/Store/CartProvider";

const App = () => {
  const [tshirts, setTshirts] = useState([]);
  const addtShirtHandler = (tshirt) => {
    setTshirts((prevTshirts) => [...prevTshirts, tshirt]);
  };
  return (
    <CartProvider>
      <Header />
      <AddTshirt onAddTshirt={addtShirtHandler} />
      <ShirtList tshirts={tshirts} />
    </CartProvider>
  );
};

export default App;

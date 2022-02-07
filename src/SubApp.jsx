import "./App.css";
import { useState } from "react";
import data from "./Components/Data";
import Cart from "./Components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
function SubApp() {
  const { product } = data;
  const [cartItem, setCartItem] = useState([0]);

  const onAddCart = (val) => {
    const exist = cartItem.find((i) => i.id === val.id);
    if (exist) {
      setCartItem(
        cartItem.map((i) =>
          i.id === val.id ? { ...val, qty: exist.qty + 1 } : i
        )
      );
    } else {
      setCartItem([...cartItem, { ...val, qty: 1 }]);
    }
  };
  const onRemoveCart = (val) => {
    const exist = cartItem.find((i) => i.id === val.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== val.id));
    } else {
      setCartItem(
        cartItem.map((i) =>
          i.id === val.id ? { ...val, qty: exist.qty - 1 } : i
        )
      );
    }
  };
  const onRemoveWholeCart = (val) => {
    setCartItem(cartItem.filter((x) => x.id !== val.id));
  };
  const value = cartItem.reduce((a, b) => b.qty + a);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App
                cartVal={value}
                product={product}
                cartItem={cartItem}
                onAddCart={onAddCart}
                onRemoveCart={onRemoveCart}
                onRemoveWholeCart={onRemoveWholeCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartVal={2}
                cartItem={cartItem}
                onAddCart={onAddCart}
                onRemoveCart={onRemoveCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default SubApp;

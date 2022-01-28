import "./App.css";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import Header from "./Components/Header";
// import Banner from "./Components/Banner";
import { useState } from "react";
import data from "./Components/Data";
import Cart from "./Components/Cart";
function App() {
  const { product } = data;
  const [cartItem, setCartItem] = useState([0]);
  const [cartValue, setCartValue] = useState([]);
  const [cartBox, setCartBox] = useState(false);
  const onAddCart = (val, id) => {
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
    cartItem.map((i) => setCartValue([...cartValue, i.qty]));
  };
  const handleCartBox = () => {
    setCartBox(!cartBox);
  };
  const onRemoveCart = () => {
    console.log("Remove cart working");
  };

  return (
    <>
      <Header
        cartVal={cartValue.length}
        handleCartBox={handleCartBox}
        cartBox={cartBox}
      />
      <Cart cartBox={cartBox} cartVal={cartValue.length} cartItem={cartItem} />
      {/* <Banner /> */}
      <MainContent
        product={product}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
      <Footer />
    </>
  );
}

export default App;

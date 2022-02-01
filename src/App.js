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
  const [cartBox, setCartBox] = useState(false);

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
    // cartItem.map((i) => setCartValue([...cartValue, i.qty]));
  };
  const handleCartBox = () => {
    setCartBox(!cartBox);
  };
  const onRemoveCart = (val) => {
    const exist = cartItem.find((i) => i.id === val.id);
    if(exist.qty===1){
      setCartItem(cartItem.filter((x) => x.id !== val.id));
    }
    else{
      setCartItem(
        cartItem.map((i) =>
          i.id === val.id ? { ...val, qty: exist.qty - 1 } : i
        )
      );
    }
  };
  const value=cartItem.reduce((a,b)=>b.qty+a);
  return (
    <>
      <Header
        cartVal={value}
        handleCartBox={handleCartBox}
        cartBox={cartBox}
      />
      <Cart
        cartBox={cartBox}
        cartVal={value}
        cartItem={cartItem}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
      />
      {/* <Banner /> */}
      <MainContent
        product={product}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        cartItem={cartItem}
      />
      <Footer />
    </>
  );
}

export default App;

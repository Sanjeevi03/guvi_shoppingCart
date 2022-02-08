import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Cart(props) {
  const { cartItem, onAddCart, onRemoveCart } = props;
  const subPrice = cartItem.reduce((a, b) => a + b.qty * b.price);
  const gstPrice = subPrice * 0.08;
  const discountPrice = 30;
  const shippingPrice = subPrice > 500 ? 0 : 50;
  const totalPrice = subPrice + gstPrice + shippingPrice - discountPrice;
  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-div text-center">
          {cartItem.length > 1 ? (
            <table className="w-75 mx-auto table table-borderless">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((i, j) =>
                  i !== 0 ? (
                    <tr key={j}>
                      <td>{j}</td>
                      <td>{i.name}</td>
                      <td>
                        <span
                          onClick={() => onRemoveCart(i)}
                          className="btn-sm btn-secondary me-2 onhover"
                        >
                          -
                        </span>
                        {i.qty}
                        <span
                          className="btn-sm btn-primary ms-2 onhover"
                          onClick={() => onAddCart(i)}
                        >
                          +
                        </span>
                      </td>
                      <td>{i.price * i.qty}</td>
                    </tr>
                  ) : null
                )}
                <tr>
                  <td></td>
                  <td></td>
                  <td>GST </td>
                  <td>{gstPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Discount</td>
                  <td>{discountPrice}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Shipping Charge </td>
                  <td>{shippingPrice}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="fw-bold">
                    Total
                  </td>
                  <td className="fw-bold">{totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <button className="btn btn-secondary rounded-pill px-5 py-2 m-2">
                      Checkout
                    </button> <br /> <br/>
                    <Link to='/'>Continue Purchasing</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>
              Your Cart is Empty <br />
              <br />
              <Link to="/">Click to Purchase Products</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;

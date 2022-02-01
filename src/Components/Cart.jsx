import React from "react";

function Cart(props) {
  const { cartBox, cartVal, cartItem, onAddCart, onRemoveCart } = props;
  const subPrice = cartItem.reduce((a, b) => a + b.qty * b.price);
  const gstPrice = subPrice * 0.08;
  const discountPrice = 30;
  const shippingPrice = subPrice > 500 ? 0 : 50;
  const totalPrice = subPrice + gstPrice + shippingPrice - discountPrice;
  return (
    <div className="cart-container">
      {cartBox ? (
        <div className="cart-div pt-2 text-center">
          {cartVal >= 1 ? (
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
                    {cartVal === 1 ? (
                      <>Total({cartVal} item)</>
                    ) : (
                      <>Total({cartVal} items)</>
                    )}
                  </td>
                  <td className="fw-bold">{totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <button className="btn btn-secondary rounded-pill px-5 py-2 m-2">
                      Checkout
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>Your Cart is Empty</div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Cart;

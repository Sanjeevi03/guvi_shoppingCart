import React from "react";

function Cart(props) {
  const { cartBox, cartVal, cartItem } = props;
  console.log(cartItem);
  return (
    <div className="cart-container">
      {cartBox ? (
        <div className="cart-div pt-2 text-center">
          {cartVal >= 1 ?<table className="w-50 mx-auto table table-borderless">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
            {cartItem.map((i, j) => (i !== 0 ? <tr key={j}>
               <td>{j}</td>
               <td>{i.name}</td>
               <td>{i.price}</td>
               <td><span className="btn-sm btn-secondary me-2">-</span>{i.qty}<span  className="btn-sm btn-primary ms-2">+</span></td>
            </tr> : null))}

            </tbody>
          </table>:<div>Your Cart is Empty</div>}
        </div>
      ) : null}
    </div>
  );
}

export default Cart;

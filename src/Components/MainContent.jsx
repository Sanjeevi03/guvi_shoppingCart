import React, { useState } from "react";
import "../App.css";
function MainContent(props) {
  const { product, onAddCart, cartItem,onRemoveCart, onRemoveWholeCart } = props;

  const [cartButton, setCartButton] = useState(true);
  const id_val = cartItem.map((i) => (i.id !== undefined ? i.id : ""));

  const handleChange = () => {
    setCartButton(!cartButton);
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row pt-5">
          {product.map((i, j) => (
            <div
              key={i.id}
              className="col-xl-3 col-lg-3 col-md-4 col-sm-6 text-center rounded-3 mb-5"
            >
              <div className="card h-100">
                {i.sale ? (
                  <span className="badge bg-dark position-absolute sale">
                    sale
                  </span>
                ) : null}
                <img src={i.image.empty} alt="" className="rounded-top" />
                <div className="card-body">
                  <h5 className="card-title p-1 fw-bold">{i.name}</h5>
                  {i.star ? (
                    <span className="star-color">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </span>
                  ) : null}

                  <p className="card-text">{i.price}</p>
                  <span className="mt-5" onClick={() => handleChange(i.id)}>
                    {id_val.find((v) => v === i.id) ? (
                      <>
                        <div className="btn-group mt-2" role="group">
                          <button onClick={()=>onRemoveCart(i)}
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => onRemoveWholeCart(i)}
                            className="btn btn-outline-secondary"
                          >
                            Remove
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => onAddCart(i)}
                          >
                            +
                          </button>
                        </div>
                      </>
                    ) : (
                      <div
                        onClick={() => onAddCart(i)}
                        className="mt-2 btn btn-outline-dark"
                      >
                        Add to Cart
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;

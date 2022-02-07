import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import menu from "../img/menu.png";
import shopping_cart from "../img/shopping-cart.png";
function Header(props) {
  const { cartVal, handleCartBox } = props;

  return (
    <div className="bg-light fixed-top">
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <p className="my-auto fs-5 head-title">Shopping</p>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nav-con"
              >
                <span>
                  <img className="menu-icon" src={menu} alt="" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="nav-con">
                <ul className="navbar-nav mx-2">
                  <li className="nav-item py-2 mx-3 head-title">Home</li>
                  <li className="nav-item py-2 mx-3">About</li>
                  <li
                    className="nav-item drop-down py-2 mx-3"
                    id="shop-item"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Shop&#8595;
                  </li>

                  <ul className="dropdown-menu ">
                    <li className="dropdown-item">All Products</li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="dropdown-item">Popular Items</li>
                    <li className="dropdown-item">New Arrivals</li>
                  </ul>
                </ul>
                <div className="d-flex justify-content-sm-start justify-content-lg-end w-75 ">
                  <Link to="/cart">
                    <div
                      onClick={handleCartBox}
                      className="card-pro ms-sm-4  ms-md-4 me-3 px-2 btn btn-outline-dark  fw-bold"
                    >
                      <img src={shopping_cart} alt="" className="card-icon " />
                      Cart
                      <span className="badge bg-dark ms-2">{cartVal}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  // Effect hook để cập nhật số lượng sản phẩm trong giỏ hàng
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      const itemCount = storedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartItemCount(itemCount);
    }
  }, [cartItemCount]); // Thêm cartItemCount vào dependency array

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler "
              type="button btn-dark"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand  ml-5 titleLogo" href="#">
              <img src="../../src/image/logo.png" alt="" />
              <span className="yellow ml-5">VH</span>{" "}
              <span className="red">Watch</span>
            </a>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Latest
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Product List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Product Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Element
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Confirmation
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Product Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex iconRight">
              <a className="nav-link" href="#">
                <i className="bi bi-search"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="bi bi-person"></i>
              </a>
              <Link className="nav-link" to="/cartProduct">
                <i className="bi bi-cart"></i>
                {cartItemCount > 0 && (
                  <span className="badge bg-danger">{cartItemCount}</span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <br />
    </div>
  );
};

export default Header;

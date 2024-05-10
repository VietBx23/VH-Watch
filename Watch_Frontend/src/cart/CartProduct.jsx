import React, { useState, useEffect } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  // Cập nhật giỏ hàng từ local storage khi component được tải
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Hàm để xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Hàm tính tổng tiền của giỏ hàng
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.productPrice * item.quantity;
    });
    return total;
  };

  return (
    <div className="site-section mt-5">
      <div className="container">
        <div className="site-blocks-table">
          {/* Table Header */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.productId}>
                  <td>
                    <img
                      src={`../../src/image/${item.productImage}`}
                      alt=""
                      width={"100%"}
                      height={"200px"}
                    />
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.productDescription}</td>
                  <td>${item.productPrice}</td>
                  <td>{item.quantity}</td>
                  <td>${item.productPrice * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <a href="/" className="btn btn-dark  btn-block">
                  Continue Shopping
                </a>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary  btn-block">
                  Remove All
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Cart Totals
                    </h3>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${calculateTotal()}</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-12">
                    <a href="/check">
                      <button className="btn btn-dark  btn-block">
                        Proceed To Checkout
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

import React, { useState, useEffect } from "react";
import { listProduct } from "../service/ProductService";
import { Link } from "react-router-dom";
function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách sản phẩm khi component được tải lần đầu
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await listProduct(); // Gọi hàm listProduct từ file api.js
      setProducts(response.data);

      // console.log("hello" + response.data); // Cập nhật danh sách sản phẩm vào state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="newArrivals">List Products</h1>
      <hr className="hr" />

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 col-6 mb-4" key={product.productId}>
            <div className="card  cardProduct px-2">
              <Link to={`/shopSingle/${product.productId}`}>
                <img
                  src={`../../src/image/${product.productImage}`}
                  className="card-img-top"
                  alt="Product"
                />
              </Link>

              <div className="card-body listProduct">
                <h5 className="card-title text-truncate text-center">
                  {product.productName}
                </h5>
                <p className="card-text text-danger">{product.productPrice}</p>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-dark">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-outline-dark">
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

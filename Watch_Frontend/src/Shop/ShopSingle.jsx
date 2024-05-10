import React, { useState, useEffect } from "react";
import { getProduct } from "../service/ProductService";
import { useParams } from "react-router-dom";
import { listProduct } from "../service/ProductService";
import { Link } from "react-router-dom";

const ShopSingle = () => {
  // Lấy productId từ URL
  const { productId } = useParams();

  // State để lưu chi tiết sản phẩm
  const [product, setProduct] = useState(null);

  // State để lưu danh sách sản phẩm
  const [products, setProducts] = useState([]);

  const [quantity, setQuantity] = useState(1); // Mặc định là 1

  // State để lưu giỏ hàng
  const [cart, setCart] = useState([]);

  // Effect hook để fetch chi tiết sản phẩm khi productId thay đổi
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProduct(productId);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Effect hook để fetch danh sách sản phẩm khi component được tải lần đầu
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await listProduct();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value)); // Chuyển đổi giá trị nhập vào thành số nguyên
  };

  // Effect hook để lưu giỏ hàng vào local storage mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Hàm để thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    const cartItem = { ...product, quantity }; // Tạo một đối tượng mới với thông tin sản phẩm và số lượng
    setCart([...cart, cartItem]); // Thêm đối tượng vào giỏ hàng
  };

  return (
    <div className="container mt-5">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={`../../src/image/${product.productImage}`}
              alt={product.productName}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.productName}</h2>
            {/* <p className="text-danger">{product.productPrice}</p> */}
            <h5 className="text-danger"> {product.productPrice}</h5>
            {/* <p>{product.productDescription}</p> */}
            {/* Thêm các thông tin khác của sản phẩm ở đây nếu cần */}

            <div className="mb-3">
              <label htmlFor="size" className="form-label">
                Size:
              </label>
              <div>
                <button className="btn btn-outline-dark me-2">16mm</button>
                <button className="btn btn-outline-dark me-2">18mm</button>
                <button className="btn btn-outline-dark me-2">20mm</button>
                <button className="btn btn-outline-dark me-2">22mm</button>
                <button className="btn btn-outline-dark me-2">24mm</button>
                <button className="btn btn-outline-dark">Large</button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="form-label ">
                Color:
              </label>
              <div>
                <button className="btn btn-outline-dark me-2">Black</button>
                <button className="btn btn-outline-dark me-2">Silver</button>
                <button className="btn btn-outline-dark">Gold</button>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label ">
                Quantity:
              </label>
              <input
                type="number"
                className="form-control quantityShop border-light w-50"
                id="quantity"
                value={quantity} // Giá trị số lượng được gán từ state
                onChange={handleQuantityChange} // Sự kiện khi thay đổi số lượng
              />
            </div>
            <button
              className="btn btn-dark me-3"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="btn btn-outline-dark">Buy Now</button>
          </div>
          <div className="col-md-12">
            <h3 className="text-center mt-5 mb-4">Related Products</h3>
            <div className="row">
              {products.map((product) => (
                <div
                  className="col-md-3 col-sm-6 col-6 mb-4"
                  key={product.productId}
                >
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
                      <p className="card-text text-danger">
                        {product.productPrice}
                      </p>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-dark">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShopSingle;

import React, { useState, useEffect } from "react";
import { listProduct } from "../service/ProductService";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
export function ItemProduct() {
  const [productShop, setProductShop] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await listProduct();
      setProductShop(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productShop.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <h4>Filters</h4>
          <div className="card border-light">
            <div className="mb-3">
              <label htmlFor="sortBy" className="form-label ">
                Sort By:
              </label>
              <select className="form-select" id="sortBy">
                <option value="default">Default</option>
                <option value="popularity">Popularity</option>
                <option value="averageRating">Average rating</option>
                <option value="newness">Newness</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="priceRange" className="form-label">
                Price:
              </label>
              <select className="form-select" id="priceRange">
                <option value="">All</option>
                <option value="0-50">$0.00 - $50.00</option>
                <option value="50-100">$50.00 - $100.00</option>
                <option value="100-150">$100.00 - $150.00</option>
                <option value="150-200">$150.00 - $200.00</option>
                <option value="200+">$200.00+</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="form-label">
                Color:
              </label>
              <div className="buttonColor">
                <button
                  type="button"
                  className="btn btn-dark rounded-pill"
                ></button>
                <br />

                <button
                  type="button"
                  className="btn btn-primary rounded-pill"
                ></button>
                <br />

                <button
                  type="button"
                  className="btn btn-secondary rounded-pill"
                ></button>
                <br />
                <button
                  type="button"
                  className="btn btn-success rounded-pill"
                ></button>
                <br />
                <button
                  type="button"
                  className="btn btn-danger rounded-pill"
                ></button>

                {/* Add more color buttons as needed */}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">
                Tags:
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="fashion"
                  value="fashion"
                />
                <label className="form-check-label" htmlFor="fashion">
                  Fashion
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="lifestyle"
                  value="lifestyle"
                />
                <label className="form-check-label" htmlFor="lifestyle">
                  Lifestyle
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="denim"
                  value="denim"
                />
                <label className="form-check-label" htmlFor="denim">
                  Denim
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="streetstyle"
                  value="streetstyle"
                />
                <label className="form-check-label" htmlFor="streetstyle">
                  Streetstyle
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="crafts"
                  value="crafts"
                />
                <label className="form-check-label" htmlFor="crafts">
                  Crafts
                </label>
              </div>
              {/* Add more tags as needed */}
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <h4>Products</h4>
          <div className="row">
            {currentProducts.map((product) => (
              <div
                className="col-md-4 col-sm-6 col-6 mb-4"
                key={product.productId}
              >
                <div className="card cardProduct px-2">
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
          {/* Pagination */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link btn-pagination btn btn-dark"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              <li className="page-item active" aria-current="page">
                <span className="page-link current-page">{currentPage}</span>
              </li>
              <li
                className={`page-item ${
                  indexOfLastProduct >= productShop.length ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link btn-pagination"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastProduct >= productShop.length}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>

          {/* Add more product cards as needed */}
        </div>
      </div>
    </div>
  );
}
export default ItemProduct;

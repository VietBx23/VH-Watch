import React from "react";

function ProductCard() {
  return (
    <div className="container col-sm-8 mt-5">
      <h1 className="newArrivals">NEW ARRIVALS</h1>
      <hr className="hr" />
      <div className="row">
        <div className="col-md-4 mb-4 ">
          <div className="card newArrivalsCard  border-0 px-2">
            <a href="#">
              <img
                src="../../src/image/newAvvirals1.png"
                className="card-img-top"
                alt="Product"
              />
            </a>

            <div className="card-body">
              <h5 className="card-title text-center">
                Thermo Ball Etip Gloves
              </h5>
              <p className="card-text text-center money">$ 45,743</p>
              {/* <button className="btn btn-dark  btnArrivals">Add to Cart</button> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 ">
          <div className="card newArrivalsCard  border-0 px-2">
            <a href="#">
              <img
                src="../../src/image/newAvvirals2.png"
                className="card-img-top"
                alt="Product"
              />
            </a>

            <div className="card-body">
              <h5 className="card-title text-center">
                Thermo Ball Etip Gloves
              </h5>
              <p className="card-text text-center money">$ 45,743</p>
              {/* <button className="btn btn-dark btnArrivals ">Add to Cart</button> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 ">
          <div className="card newArrivalsCard  border-0 px-2">
            <a href="#">
              <img
                src="../../src/image/newAvvirals2.png"
                className="card-img-top"
                alt="Product"
              />
            </a>

            <div className="card-body">
              <h5 className="card-title text-center">
                Thermo Ball Etip Gloves
              </h5>
              <p className="card-text text-center money">$ 45,743</p>
              {/* <button className="btn btn-dark btnArrivals ">Add to Cart</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

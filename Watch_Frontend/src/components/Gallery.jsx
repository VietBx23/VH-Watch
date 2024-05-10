import React from "react";

function Gallery() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
          <div className="single-gallery mb-30">
            <div className="gallery-img big-img">
              <img src="../../src/image/gallery1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="single-gallery mb-30">
            <div className="gallery-img big-img">
              <img src="../../src/image/gallery2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-12">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
              <div className="single-gallery mb-30">
                <div className="gallery-img small-img">
                  <img src="../../src/image/gallery3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 mt-3">
              <div className="single-gallery mb-30">
                <div className="gallery-img small-img">
                  <img src="../../src/image/gallery4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

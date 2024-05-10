import React from "react";

const FooterComponet = () => {
  return (
    <div>
      <footer className="text-white text-center py-4  ">
        {/* fixed-bottom */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>About Timepieces</h5>
              <p>
                Timepieces is your destination for high-quality watches. Explore
                our collection of classic and modern timepieces.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: info@timepieces.com</li>
                <li>Phone: +123-456-7890</li>
                <li>Address: 123 Main Street, City, Country</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Timepieces. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponet;

{
  /* <footer className="footer">
  <h4>All rights reserved 2023 by java</h4>
</footer>; */
}

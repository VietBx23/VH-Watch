import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponet from "./Header/HeaderComponet";
import FooterComponet from "./Footer/FooterComponet";
import Carousel from "./Slideshow/Carousel";
import NewArrvals from "./Product/NewArrivals";
import Gallery from "./components/Gallery";
import ProductCard from "./Product/Products";
import Brands from "./Brand/Brands";
import ListEmployeeComponet from "./components/ListEmployeeComponet";
import EmployeeComponet from "./components/EmployeeComponet";
import Shop from "./Shop/Shop";
import ShopSingle from "./Shop/ShopSingle";
import CartProduct from "./cart/CartProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderComponet />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <NewArrvals />
                <Gallery />
                <ProductCard />
                <Brands />
                <ListEmployeeComponet />
              </>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopSingle/:productId" element={<ShopSingle />} />
          {/* <Route path="/shopSingle" element={<ShopSingle />} /> */}
          <Route path="/cartProduct" element={<CartProduct />} />
          <Route path="/employee" element={<ListEmployeeComponet />} />
          <Route path="/add-employee" element={<EmployeeComponet />} />
          <Route path="/edit-employee/:id" element={<EmployeeComponet />} />
        </Routes>
        <FooterComponet />
      </div>
    </BrowserRouter>
  );
}

export default App;

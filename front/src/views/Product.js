import React, { PureComponent } from 'react';
import Navbar from "../component/NavBar";
import ProductPage from "../component/ProductPage";


class Product extends PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <ProductPage />
      </>
    );
  }
}

export default Product;
import React, { PureComponent } from 'react';
import Navbar from "../component/NavBar";
import CategoryPage from "../component/CategoryPage";


class Category extends PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <CategoryPage />
      </>
    );
  }
}

export default Category;
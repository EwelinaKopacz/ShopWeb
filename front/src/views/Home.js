import React, { PureComponent } from 'react';
import Navbar from "../component/NavBar";
import CategoryPage from "../component/CategoryPage";


class Home extends PureComponent {
  render() {
    return (
      <>
        <Navbar />
        <CategoryPage />
      </>
    );
  }
}

export default Home;
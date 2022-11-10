import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom"
import ResetStyle from '../Styled/Reset.styled';
import GlobalStyle from '../Styled/Global.styled';
import StyledAppDiv from './App.styled';
import Home from '../../views/Home';
import Category from '../../views/Category';
import Product from '../../views/Product';

class App extends PureComponent {
  render() {
    return (
      <>
        <ResetStyle/>
        <GlobalStyle/>
        <StyledAppDiv>
          <Routes>
              <Route path="/" element={<Home/>}>
                <Route path="/category/:category" element={<Category/>}/>
              </Route>
              <Route path="/product/:id" element={<Product/>}/>
              {/* <Route path="/cart" element={<Cart>}/> */}
          </Routes>
        </StyledAppDiv>
      </>
    );
  }
}

export default App;

import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom"
import ResetStyle from '../Styled/Reset.styled';
import GlobalStyle from '../Styled/Global.styled';
import StyledAppDiv from './App.styled';
import Home from '../../views/Home';
import Category from '../../views/Category';

class App extends PureComponent {
  render() {
    return (
      <>
        <ResetStyle/>
        <GlobalStyle/>
        <StyledAppDiv>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/category/:category" element={<Category/>}/>
              {/* <Route exact path="/product/:id"><Product></Route>
              <Route exact path="/cart"><Cart></Route> */}
              {/* <CategoryPage/> */}
          </Routes>
        </StyledAppDiv>
      </>
    );
  }
}

export default App;

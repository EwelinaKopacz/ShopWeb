import React, { PureComponent } from 'react';
import ResetStyle from '../Styled/Reset.styled';
import GlobalStyle from '../Styled/Global.styled';
import StyledAppDiv from './App.styled';
import Header from '../Header/index';


class App extends PureComponent {
  render() {
    return (
      <>
        <ResetStyle/>
        <GlobalStyle/>
        <StyledAppDiv>
          <Header/>
        </StyledAppDiv>
      </>
    );
  }
}

export default App;

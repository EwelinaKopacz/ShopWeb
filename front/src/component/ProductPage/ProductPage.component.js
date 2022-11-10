import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyledProductSection, StyledProductGallery, StyledProductBox } from "./ProductPage.styled";


class ProductPage extends PureComponent {
  state = {
    product: {}
  }

  componentDidMount(){
    const {pickedProduct} = this.props;
    this.setState({
      product:pickedProduct
    })
  }

  render() {
    const {product} = this.state;
    return (
      <StyledProductSection>

        <StyledProductGallery>

        </StyledProductGallery>

        <StyledProductBox>
          {product.name}

        </StyledProductBox>

      </StyledProductSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pickedProduct: state.product,
  }
}

export default connect (mapStateToProps, null) (ProductPage);
import React, { PureComponent } from 'react';
import CategoryName from '../CategoryName';
import ProductsList from '../ProductsList';
import { connect } from 'react-redux';
import StyledCategoryPage from "./CategoryPage.styled";


class CategoryPage extends PureComponent {

    render() {
        const {pickedCategory} = this.props;
        return (
            <StyledCategoryPage>
                <CategoryName catName={pickedCategory}/>
                <ProductsList/>
            </StyledCategoryPage>
        );
    }
  }

  const mapStateToProps = (state) => {
      return {
        pickedCategory: state.category,
      }
  }

  export default connect (mapStateToProps, null) (CategoryPage);
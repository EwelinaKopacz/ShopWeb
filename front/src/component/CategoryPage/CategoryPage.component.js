import React, { PureComponent } from 'react';
import CategoryName from '../CategoryName';
import ProductsList from '../ProductsList';
import { connect } from 'react-redux';


class CategoryPage extends PureComponent {
    state = {
        currCategory: ""
    }

    componentDidMount(){
        this.setCurrCategory();
    }

    setCurrCategory(){
        const {pickedCategory} = this.props;
        if(pickedCategory === ""){
            this.setState({
                currCategory:"All"
            })
        }
    }

    render() {
        const {pickedCategory} = this.props;
        return (
            <>
                {pickedCategory ? <CategoryName catName={pickedCategory}/> : <CategoryName catName='All'/> }
                <ProductsList/>
            </>
        );
    }
  }

  const mapStateToProps = (state) => {
      return {
        pickedCategory: state.category,
      }
  }

  export default connect (mapStateToProps, null) (CategoryPage);
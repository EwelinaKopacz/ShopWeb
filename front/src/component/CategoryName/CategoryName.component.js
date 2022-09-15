import React, { PureComponent } from 'react';
import StyledH2 from './CategoryName.styled';



class CategoryName extends PureComponent {

    render(){
        const {catName} = this.props;
        return (
            <StyledH2>
                {catName}
            </StyledH2>
        )
    }
}

export default CategoryName;
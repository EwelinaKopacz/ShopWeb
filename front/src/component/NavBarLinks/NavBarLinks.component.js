import React, { PureComponent } from 'react';
import {StyledNavUl, StyledNavLi, StyledNavLink} from './NavBarLinks.styled'
import client from '../../util/apollo-client';
import { getCategories} from '../../query/queries-graphql';

import { connect } from 'react-redux';
import { setCategory } from '../../actions';

class NavBarLinks extends PureComponent {
        state = {
            categories: [],
        }

    componentDidMount(){
        this.fetchCategories();
    }

    async fetchCategories (){
        const {addPickedCategory} = this.props;
        const response = await client.query({
            query:getCategories
        });

        const defaultCat = response.data.categories[0].name;
        addPickedCategory(defaultCat);

        this.setState ({
            categories: [...response.data.categories]
        })
    }

    handleClick(e){
        const {addPickedCategory} = this.props;
        const selectedCategory = e.target.name
        addPickedCategory(selectedCategory);
    }

    render() {
        const {categories} = this.state;
        return (
            <StyledNavUl>
                {categories.map(({name}) => (
                    <StyledNavLi key={name}>
                        <StyledNavLink
                            to={`/category/${name}`}
                            activeclassname="active"
                            onClick={this.handleClick.bind(this)}
                            name={name}>
                            {name}
                        </StyledNavLink>
                    </StyledNavLi>
                ))}
            </StyledNavUl>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      pickedCategory: state.category,
    }
}

const mapDispatchToProps = dispatch => ({
    addPickedCategory:(value) => dispatch(setCategory(value))
})

export default connect (mapStateToProps, mapDispatchToProps)(NavBarLinks);
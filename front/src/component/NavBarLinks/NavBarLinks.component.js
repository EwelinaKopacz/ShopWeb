import React, { PureComponent } from 'react';
import {StyledNavUl, StyledNavLi, StyledNavLink} from './NavBarLinks.styled'
import { v4 as uuid } from 'uuid';
import client from '../../util/apollo-client';
import { getCategories} from '../../query/queries-graphql';

import { connect } from 'react-redux';
import { setCategory } from '../../actions';

class NavBarLinks extends PureComponent {
        state = {
            selectedCat: '', // to chyba nie jest potrzebne ?
            categories: []
        }

    componentDidMount(){
        this.fetchQuery();
    }

    async fetchQuery (){
        const response = await client.query({
            query:getCategories
        });

        this.setState ({
            categories: [...response.data.categories]
        })
    }

    setSelectedCategory(e){
        const {addPickedCategory} = this.props;
        const selectedCategory = e.target.name
        this.setState({
            selectedCat:selectedCategory // to chyba nie jest potrzebne ?
        })
        addPickedCategory(selectedCategory);
    }

    render() {
        const {categories} = this.state;
        return (
            <StyledNavUl>
                {categories.map(({name}) => (
                    <StyledNavLi key={uuid()}>
                        <StyledNavLink onClick={this.setSelectedCategory.bind(this)} name={name}>{name}</StyledNavLink> 
                    </StyledNavLi>

                ))}
            </StyledNavUl>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addPickedCategory:(value) => dispatch(setCategory(value))
})

export default connect (null, mapDispatchToProps)(NavBarLinks);

// INNE:
// Klikanie tylko w link <a></a> powoduje zmianę, problem jest bo nie działa na klika z li
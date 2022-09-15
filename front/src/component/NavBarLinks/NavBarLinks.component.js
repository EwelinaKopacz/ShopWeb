import React, { PureComponent } from 'react';
import {StyledNavUl, StyledNavLi, StyledNavLink} from './NavBarLinks.styled'
import { v4 as uuid } from 'uuid';
import client from '../../util/apollo-client';
import { getCategories} from '../../query/queries-graphql';


class NavBarLinks extends PureComponent {
        state = {
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

    render() {
        const {categories} = this.state;
        return (
            <StyledNavUl>
                {categories.map(({name}) => (
                    <StyledNavLi key={uuid()}>
                        <StyledNavLink>{name}</StyledNavLink>
                    </StyledNavLi>

                ))}
            </StyledNavUl>
        );
    }
}

export default NavBarLinks;
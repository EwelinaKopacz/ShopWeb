import React, { PureComponent } from 'react';
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
        console.log(this.state.categories)
        const {categories} = this.state;
        return (
            <ul>
                {categories.map(({name}) => (
                    <li key={uuid()}>{name}</li>

                ))}
            </ul>
        );
    }
}

export default NavBarLinks;
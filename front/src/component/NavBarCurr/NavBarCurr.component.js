import React, { PureComponent } from 'react';
import client from '../../util/apollo-client';
import { getCurrencies } from '../../query/queries-graphql';

import { connect } from 'react-redux';
import { setCurrency } from '../../actions';

import { StyledCurrWrapper, StyledCurrBox, StyledCurrSymbol, StyledCurrArrow } from './NavBarCurr.styled';
import {ReactComponent as ArrowDown} from '../../assets/arrow_down.svg';
import {ReactComponent as ArrowUp} from '../../assets/arrow_up.svg';


class NavBarCurr extends PureComponent {
    state = {
        currCurrency: ""
    }

    componentDidMount(){
        this.getCurrencies();
    }

    async getCurrencies(){
        const {addPickedCurrency} = this.props;
        const response = await client.query({
            query:getCurrencies
        })
        const defaultCurr = response.data.currencies[0].symbol;
        addPickedCurrency(defaultCurr);
    }

    render() {
        const {pickedCurrency} = this.props;
        return (
            <StyledCurrWrapper>
                <StyledCurrBox>
                    <StyledCurrSymbol>{pickedCurrency}</StyledCurrSymbol>
                </StyledCurrBox>
                <StyledCurrArrow>
                    <ArrowDown/>
                </StyledCurrArrow>
            </StyledCurrWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addPickedCurrency:(value) => dispatch(setCurrency(value))
})

const mapStateToProps = state => {
    return {
        pickedCurrency: state.currency
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(NavBarCurr);
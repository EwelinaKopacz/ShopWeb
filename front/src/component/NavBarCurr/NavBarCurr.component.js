import React, { PureComponent } from 'react';
import client from '../../util/apollo-client';
import { getCurrencies } from '../../query/queries-graphql';

import { connect } from 'react-redux';
import { setCurrency } from '../../actions';

import { StyledCurrWrapper, StyledCurrBox, StyledCurrSymbol,
        StyledCurrModal, StyledCurrOptions, StyledCurrOptionsItems,
        StyledCurrOptionsSymbol, StyledCurrOptionsLabel } from './NavBarCurr.styled';

import {ReactComponent as ArrowDown} from '../../assets/arrow_down.svg';
import {ReactComponent as ArrowUp} from '../../assets/arrow_up.svg';


class NavBarCurr extends PureComponent {
    state = {
        currCurrency: "",
        allCurrencies: [],
        showModal: false
    }

    componentDidMount(){
        this.getCurrencies();
    }

    async getCurrencies(){
        const {addDefaultCurrency} = this.props;
        const response = await client.query({
            query:getCurrencies
        })
        const defaultCurr = response.data.currencies[0].symbol;
        addDefaultCurrency(defaultCurr);

        const allCurr = response.data.currencies;
        this.setState({
            allCurrencies:[...allCurr]
        })
    }

    handleClick(prevStat){
        this.setState({
            showModal:!prevStat
        })
    }

    render() {
        const {pickedCurrency} = this.props;
        const {showModal, allCurrencies} = this.state;
         return (
            <StyledCurrWrapper>
                <StyledCurrBox>
                    <StyledCurrSymbol>{pickedCurrency}</StyledCurrSymbol>
                </StyledCurrBox>

                <StyledCurrModal onClick={() => this.handleClick(showModal)}>
                    {showModal ? <ArrowUp/> : <ArrowDown/>}
                </StyledCurrModal>

                <StyledCurrOptions active={showModal}>
                    {allCurrencies.map(item=>(
                    <StyledCurrOptionsItems key={item.symbol}>
                        <StyledCurrOptionsSymbol>{item.symbol}</StyledCurrOptionsSymbol>
                        <StyledCurrOptionsLabel>{item.label}</StyledCurrOptionsLabel>
                    </StyledCurrOptionsItems>
                    ))}
                </StyledCurrOptions>

            </StyledCurrWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addDefaultCurrency:(value) => dispatch(setCurrency(value))
})

const mapStateToProps = state => {
    return {
        pickedCurrency: state.currency
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(NavBarCurr);
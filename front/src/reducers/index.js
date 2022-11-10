const initState = {
    category: "",
    currency: "",
    product: {},
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case 'setSelectedCategory':
            return {
                ...state,
                category: action.payload.value
        };

        case 'setSelectedCurrency':
            return {
                ...state,
                currency: action.payload.value
        }

        case 'setSelectedProduct':
            return {
                ...state,
                product:action.payload.value
            }

        default:
            return state;
    }
}

export default reducer;



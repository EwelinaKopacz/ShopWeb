const initState = {
    category: ''
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case 'setSelectedCategory':
            return {
                ...state,
                category: action.payload.value
        };
        default:
            return state;
    }
}

export default reducer;



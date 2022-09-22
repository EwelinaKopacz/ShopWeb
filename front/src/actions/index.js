export const setCategory = value => {
    return {
        type: 'setSelectedCategory',
        payload: {
            value:value
        },
    }
}

export const setCurrency = value => {
    return {
        type: 'setSelectedCurrency',
        payload: {
            value:value
        },
    }
}
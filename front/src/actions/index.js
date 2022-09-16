export const setCategory = value => {
    return {
        type: 'setSelectedCategory',
        payload: {
            value:value
        },
    }
}
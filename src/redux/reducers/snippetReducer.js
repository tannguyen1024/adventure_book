const snippet = (state = [], action) => {
    switch (action.type) {
        case 'SET_SNIPPET':
            return action.payload[0];
        default:
            return state;
    }
}

export default snippet;
const snippetEdit = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_SNIPPET':
            console.log('Snippet Edit has:', action.payload[0])
            return action.payload[0];
        case 'FETCH_SNIPPET': /* This sets the Currently Selected Story back to Blank! */
            return {};
        default:
            return state;
    }
}

export default snippetEdit;
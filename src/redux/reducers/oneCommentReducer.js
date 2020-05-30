const firstSnippetChild = (state = [], action) => {
    switch (action.type) {
        case 'SET_ONE_COMMENT':
            return action.payload;
        default:
            return state;
    }
}

export default firstSnippetChild;
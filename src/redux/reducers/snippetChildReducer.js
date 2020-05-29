const snippetChild = (state = [], action) => {
    switch (action.type) {
        case 'SET_SNIPPET_CHILD':
            return action.payload;
        default:
            return state;
    }
}

export default snippetChild;
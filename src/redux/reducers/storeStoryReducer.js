const storeStoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'STORE_STORY':
            return action.payload;
        default:
            return state;
    }
}

export default storeStoryReducer;
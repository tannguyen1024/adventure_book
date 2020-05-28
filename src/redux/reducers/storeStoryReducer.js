const storeStoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FIRST_SNIPPET':
            console.log ('Payload is:',action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default storeStoryReducer;
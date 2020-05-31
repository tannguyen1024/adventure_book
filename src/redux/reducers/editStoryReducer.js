const editStoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EDIT_STORY':
            // console.log('editStoryReducer PAYLOAD IS:', action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default editStoryReducer;
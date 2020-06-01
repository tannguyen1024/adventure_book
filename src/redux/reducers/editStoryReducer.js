const editStoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EDIT_STORY':
            // console.log('editStoryReducer PAYLOAD IS:', action.payload)
            return action.payload;
        case 'FETCH_STORY': /* This sets the Currently Selected Story back to Blank! */
            return [];
        default:
            return state;
    }
}

export default editStoryReducer;
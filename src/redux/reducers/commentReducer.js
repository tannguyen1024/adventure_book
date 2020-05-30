const allComments = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMMENT':
            console.log('ALL COMMENTS PAYLOAD IS:',action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default allComments;
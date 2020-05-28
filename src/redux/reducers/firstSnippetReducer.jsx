import axios from 'axios';

const firstSnippetChild = (state = [], action) => {
    switch (action.type) {
        case 'SET_FIRST_SNIPPET_CHILD':
            return action.payload;
        default:
            return state;
    }
}

export default firstSnippetChild;
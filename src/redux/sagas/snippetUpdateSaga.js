import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// Fetches ALL the stories
function* putSnippet(action) {
    try {
        const id = action.payload.id;
        yield axios.put(`/api/snippet/${id}`, action.payload);
        yield put({ type: 'FETCH_SNIPPET', payload: id});
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* snippetUpdate() {
    yield takeLatest('UPDATE_SNIPPET', putSnippet);
}

export default snippetUpdate;

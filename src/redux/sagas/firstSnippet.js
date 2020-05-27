import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchSnippet(action) {
    let id=action.payload.id;
    try {
        const response = yield axios.get(`/api/snippet/current/${id}`);
        yield put({ type: 'SET_FIRST_SNIPPET', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* firstSnippet() {
    yield takeLatest('FETCH_FIRST_SNIPPET', fetchSnippet);
}

export default firstSnippet;

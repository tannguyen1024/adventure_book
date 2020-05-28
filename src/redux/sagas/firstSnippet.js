import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSnippet(action) {
    console.log('In firstSnippet SAGA with:', action.payload)
    let id=action.payload;
    try {
        const response = yield axios.get(`/api/snippet/${id}`);
        yield put({ type: 'SET_FIRST_SNIPPET', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* firstSnippet() {
    yield takeLatest('FETCH_FIRST_SNIPPET', fetchSnippet);
}

export default firstSnippet;

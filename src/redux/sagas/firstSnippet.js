import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the first snippet */
function* fetchSnippet(action) {
    // console.log('In firstSnippet SAGA with:', action.payload)
    let id=action.payload;
    try {
        const response = yield axios.get(`/api/snippet/start/${id}`);
        yield put({ type: 'SET_FIRST_SNIPPET', payload: response.data });
        const response2 = yield axios.get(`/api/snippet/start/child/${response.data[0].snippet_id}`);
        yield put({ type: 'SET_FIRST_SNIPPET_CHILD', payload: response2.data});
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* firstSnippet() {
    yield takeLatest('FETCH_FIRST_SNIPPET', fetchSnippet);
}

export default firstSnippet;

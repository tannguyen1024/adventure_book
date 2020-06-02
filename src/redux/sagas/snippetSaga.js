import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* fetchSnippet(action) {
    console.log('In snippetSaga with:', action.payload)
    let id=action.payload;
    try {
        const response = yield axios.get(`/api/snippet/${id}`);
        console.log ('snippet saga:',response.data)
        yield put({ type: 'SET_SNIPPET', payload: response.data });
        yield put({ type: 'SET_EDIT_SNIPPET', payload: response.data});
        const response2 = yield axios.get(`/api/snippet/child/${response.data[0].id}`);
        yield put({ type: 'SET_SNIPPET_CHILD', payload: response2.data});
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* firstSnippet() {
    yield takeLatest('FETCH_SNIPPET', fetchSnippet);
}

export default firstSnippet;

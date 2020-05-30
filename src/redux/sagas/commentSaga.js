import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* fetchAllComment() {
    try {
        const response = yield axios.get(`/api/comment/`);
        console.log ('RESPONSE IS', response.data)
        yield put({ type: 'SET_COMMENT', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* comment() {
    yield takeLatest('FETCH_COMMENT', fetchAllComment);
}

export default comment;

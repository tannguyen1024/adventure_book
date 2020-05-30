import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* fetchOneComment(action) {
    console.log('In snippetSaga with:', action.payload)
    let id = action.payload;
    try {
        const response = yield axios.get(`/api/comment/${id}`);
        yield put({ type: 'SET_ONE_COMMENT', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* oneComment() {
    yield takeLatest('FETCH_ONE_COMMENT', fetchOneComment);
}

export default oneComment;

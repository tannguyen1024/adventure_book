import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* eraseComment(action) {
    console.log('In snippetSaga with:', action.payload)
    let id = action.payload;
    try {
        yield axios.delete(`/api/comment/${id}`);
        yield put({ type: 'FETCH_COMMENT' });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* deleteComment() {
    yield takeLatest('DELETE_COMMENT', eraseComment);
}

export default deleteComment;



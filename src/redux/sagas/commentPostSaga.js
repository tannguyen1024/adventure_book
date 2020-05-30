import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* postComment(action) {
    console.log('In commentPostSaga with:', action.payload)
    try {
        yield axios.post(`/api/comment/`, action.payload);
        yield put({ type: 'FETCH_ONE_COMMENT', payload: action.payload.snippet });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* setComment() {
    yield takeLatest('POST_COMMENT', postComment);
}

export default setComment;

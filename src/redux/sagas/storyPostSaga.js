import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* postStory(action) {
    console.log('In storyPostSaga with:', action.payload)
    try {
        const response = yield axios.post(`/api/story/`, action.payload);
        // console.log( response.data[0].id )
        let story_id = response.data[0].id;
        yield axios.post(`/api/snippet/start/${story_id}`, action.payload)
        // yield put({ type: 'FETCH_ONE_COMMENT', payload: action.payload.snippet });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* setComment() {
    yield takeLatest('POST_STORY', postStory);
}

export default setComment;

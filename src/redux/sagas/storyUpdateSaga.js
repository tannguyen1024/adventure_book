import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// Fetches ALL the stories
function* putStory(action) {
    try {
        const id = action.payload.story_id;
        const response = yield axios.put(`/api/story/${id}`, action.payload);
        yield put({ type: 'FETCH_STORY'});
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* storyUpdate() {
    yield takeLatest('UPDATE_STORY', putStory);
}

export default storyUpdate;

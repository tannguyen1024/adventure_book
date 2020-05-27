import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchStory() {
    try {
        const response = yield axios.get('/api/story');
        yield put({ type: 'SET_STORY', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* storySaga() {
    yield takeLatest('FETCH_STORY', fetchStory);
}

export default storySaga;

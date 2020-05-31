import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function * editStory (action) {
    try {
        // console.log ('RUNNING GENERATOR NOW')
        const response = yield axios.get(`/api/story/edit/${action.payload}`)
        // console.log ('BACK FROM GENERATOR with', response.data)
        yield put({ type: 'SET_EDIT_STORY', payload: response.data})
    }
    catch (error) {

    }
}

function * adminEditStorySaga () {
    yield takeLatest('GET_EDIT_STORY', editStory);
}

export default adminEditStorySaga;
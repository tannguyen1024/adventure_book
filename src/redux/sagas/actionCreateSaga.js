import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* createAction(action) {
    console.log('In actionCreate SAGA with:', action.payload)
    try {
        const response = yield axios.post(`/api/snippet/start/${action.payload.story_id}`, action.payload);
        let child = response.data[0].id;
        console.log('The child is:', child)
        yield axios.post(`/api/snippet/action/${child}`, action.payload);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* actionCreate() {
    yield takeLatest('NEW_ACTION', createAction); /* STATE is sent here */
}

export default actionCreate;

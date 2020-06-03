import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* deleteAction(action) {
    console.log('In actionDelete SAGA with:', action.payload)
    try {
        yield axios.delete(`/api/snippet/action/${action.payload.id}`);
        yield axios.delete(`/api/snippet/delete/${action.payload.child}`);
        console.log('Deleted junction:', action.payload.id, 'and child:', action.payload.child);
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* actionDelete() {
    yield takeLatest('DELETE_ACTION', deleteAction); /* STATE is sent here */
}

export default actionDelete;

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

/* This receives all the snippet info for the current snippet */
function* putUser(action) {
    console.log('In userUpdateSaga with:', action.payload)
    let id = action.payload;
    try {
        yield axios.put(`/api/user/update/${id}`);
        yield put({ type: 'FETCH_USER_ALL' });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* userUpdate() {
    yield takeLatest('UPDATE_USER', putUser);
}

export default userUpdate;



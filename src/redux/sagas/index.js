import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import userAllSaga from './userAllSaga';
import storySaga from './storySaga';
import snippetStartSaga from './snippetStartSaga';
import snippet from './snippetSaga';
import oneComment from './commentOneSaga';
import commentPost from './commentPostSaga';
import storyPost from './storyPostSaga';
import comment from './commentSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    userAllSaga(),
    storySaga(),
    snippetStartSaga(),
    snippet(),
    oneComment(),
    commentPost(),
    storyPost(),
    comment(), // All Comments Saga
  ]);
}

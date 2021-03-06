import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import userAll from './userAllReducer';
import story from './storyReducer';
import firstSnippet from './storeStoryReducer';
import firstSnippetChild from './firstSnippetReducer';
import snippet from './snippetReducer';
import snippetEdit from './snippetEditReducer';
import snippetChild from './snippetChildReducer';
import oneComment from './oneCommentReducer';
import allComment from './commentReducer';
import editStory from './editStoryReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  userAll, // Shows ALL users
  story, // Shows ALL stories
  firstSnippet, // Shows CURRENT story.
  firstSnippetChild, // Shows CURRENT story's child
  snippet, // Shows current snippet info
  snippetEdit, // Used by edit page
  snippetChild, // Shows current snippet's children 
  oneComment, // Shows current snippet's comment
  allComment, // Shows all comments
  editStory, // Sets the current story to edit
});

export default rootReducer;

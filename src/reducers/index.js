import {combineReducers} from 'redux';
import postsReducer from './posts';
import utilReducer from './utils';

export default combineReducers({
    posts: postsReducer,
    utils: utilReducer,
});
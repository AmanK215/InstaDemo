import { combineReducers } from 'redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import LikeReducer from './LikeReducer';
import logger from 'redux-logger'
import ProfileReducer from './ProfileReducer';


const appReducer = combineReducers({
  likeRdeucer: LikeReducer,
  profile: ProfileReducer
});

const store  = createStore(appReducer, applyMiddleware(logger));

export default store;
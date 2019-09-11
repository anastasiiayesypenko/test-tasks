import { combineReducers } from 'redux';
import postsListReducer from './posts/reducers/postsListReducer';
import commentsReducer from './comments/reducers/commentsReducer';
import errorReducer from './posts/reducers/errorReducer';
import loadingReducer from './posts/reducers/loadingReducer';

const combinedReducer = combineReducers({
  posts: postsListReducer,
  comments: commentsReducer,
  error: errorReducer,
  loading: loadingReducer,
});
export default combinedReducer;

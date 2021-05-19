import { combineReducers } from 'redux';
import { countReducer } from './count_reducer';
import { postReducer } from './post_reducer';

const rootReducers = combineReducers({
  count: countReducer,
  post: postReducer,
});

export default rootReducers;

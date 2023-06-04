import { combineReducers } from 'redux';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return action.payload;
    case 'FETCH_POSTS_FAILURE':
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;









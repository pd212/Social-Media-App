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







// import { FETCH_POSTS } from "../actions/type";

// const initialState = {
//   posts: [],
//   loading: true,
// };

// const postReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_POSTS:
//       return {
//         ...state,
//         posts: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export default postReducer;

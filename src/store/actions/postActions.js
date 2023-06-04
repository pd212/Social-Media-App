export const fetchPostsSuccess = (posts) => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: posts,
});

export const fetchPostsFailure = () => ({
  type: 'FETCH_POSTS_FAILURE',
});

export const fetchPosts = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => dispatch(fetchPostsSuccess(data)))
      .catch(() => dispatch(fetchPostsFailure()));
  };
};



// import { FETCH_POSTS } from "./type";

// export const fetchPosts = () => async (dispatch) => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();

//     dispatch({
//       type: FETCH_POSTS,
//       payload: posts,
//     });
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//   }
// };


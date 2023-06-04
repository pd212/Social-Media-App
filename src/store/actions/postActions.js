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





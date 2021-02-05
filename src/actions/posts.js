export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';
export const START_LOADING = 'START_LOADING';

export const startLoading = () => ({
  type: START_LOADING,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: {
    posts,
  },
});

export const getPostsFailed = (error) => ({
  type: GET_POSTS_FAILED,
  payload: {
    error,
  },
});

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch(getPostsSuccess(posts));
  } catch (err) {
    dispatch(getPostsFailed(err.toString()));
  }
};

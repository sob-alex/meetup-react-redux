export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILED = 'GET_COMMENTS_FAILED';
export const START_LOADING = 'START_LOADING';
export const RESET_COMMENTS_STATE = 'RESET_COMMENTS_STATE';

export const startLoading = () => ({
  type: START_LOADING,
});

export const resetCommentsState = () => ({
    type: RESET_COMMENTS_STATE,
  });

export const getCommentsSuccess = (comments) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: {
    comments,
  },
});

export const getCommentsFailed = (error) => ({
  type: GET_COMMENTS_FAILED,
  payload: {
    error,
  },
});

export const getComments = (postId) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();
    dispatch(getCommentsSuccess(comments));
  } catch (err) {
    dispatch(getCommentsFailed(err.toString()));
  }
};

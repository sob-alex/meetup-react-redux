import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  START_LOADING,
  RESET_COMMENTS_STATE,
} from '../actions/comments';

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_LOADING:
      return { ...state, loading: true };
    case GET_COMMENTS_SUCCESS:
      return { ...state, comments: payload.comments, loading: false };
    case GET_COMMENTS_FAILED:
      return { ...state, error: payload.error, loading: false };
    case RESET_COMMENTS_STATE:
      return initialState;
    default:
      return state;
  }
};

export default commentsReducer;

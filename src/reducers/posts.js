import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILED, START_LOADING } from '../actions/posts';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_LOADING:
        return {...state, loading: true};
    case GET_POSTS_SUCCESS:
        console.log(payload)
      return { ...state, posts: payload.posts, loading: false };
    case GET_POSTS_FAILED:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

export default postsReducer;

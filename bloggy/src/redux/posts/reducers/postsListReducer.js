import actionTypes from '../../actionTypes';

const initialState = [];

const postsListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_ALL_POSTS:
      return payload.posts;
    case actionTypes.CREATE_POST:
      return [...state, payload.post];
    case actionTypes.DELETE_POST:
      return state.filter(post => post.id !== payload.id);
    case actionTypes.UPDATE_POST:
      return state.map(post =>
        post.id === payload.updatedPost.id ? payload.updatedPost : post,
      );
    default:
      return state;
  }
};

export default postsListReducer;

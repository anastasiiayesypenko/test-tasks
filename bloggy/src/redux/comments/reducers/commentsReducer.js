import actionTypes from '../../actionTypes';

const initialState = [];

const postsListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_COMMENT:
      return [...state, payload.comment];
    case actionTypes.GET_ALL_COMMENTS:
      return payload.comments;
    default:
      return state;
  }
};

export default postsListReducer;

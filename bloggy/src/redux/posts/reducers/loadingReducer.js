import actionTypes from '../../actionTypes';

const initialState = false;

const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.POSTS_LOADING:
      return true;
    case actionTypes.GET_ALL_POSTS:
      return false;
    case actionTypes.SET_ERROR:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;

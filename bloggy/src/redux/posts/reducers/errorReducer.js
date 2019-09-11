import actionTypes from '../../actionTypes';

const initialState = '';

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default errorReducer;

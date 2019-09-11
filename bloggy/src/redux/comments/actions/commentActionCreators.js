import actionTypes from '../../actionTypes';

export const addCommentActionCreator = comment => ({
  type: actionTypes.CREATE_COMMENT,
  payload: {
    comment,
  },
});
export const getAllCommentsActionCreator = comments => ({
  type: actionTypes.GET_ALL_COMMENTS,
  payload: {
    comments,
  },
});
export const deleteCommentActionCreator = comments => ({
  type: actionTypes.DELETE_COMMENT,
  payload: {
    comments,
  },
});

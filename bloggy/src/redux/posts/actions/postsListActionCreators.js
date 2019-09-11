import actionTypes from '../../actionTypes';

export const getAllPostsActionCreator = posts => ({
  type: actionTypes.GET_ALL_POSTS,
  payload: {
    posts,
  },
});

export const loadingActionCreator = () => ({
  type: actionTypes.POSTS_LOADING,
});

export const createPostActionCreator = post => ({
  type: actionTypes.CREATE_POST,
  payload: {
    post,
  },
});

export const postErrorActionCreator = error => ({
  type: actionTypes.SET_ERROR,
  payload: {
    error,
  },
});

export const deletePostActionCreator = id => ({
  type: actionTypes.DELETE_POST,
  payload: {
    id,
  },
});

export const updatePostActionCreator = updatedPost => ({
  type: actionTypes.UPDATE_POST,
  payload: {
    updatedPost,
  },
});

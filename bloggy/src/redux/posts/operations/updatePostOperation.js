import axios from 'axios';
import {
  updatePostActionCreator,
  postErrorActionCreator,
} from '../actions/postsListActionCreators';

const updatePostOperation = updatedPost => dispatch => {
  axios
    .put(
      `https://bloggy-api.herokuapp.com/posts/${updatedPost.id}`,
      updatedPost,
    )
    .then(() => {
      dispatch(updatePostActionCreator(updatedPost));
    })
    .catch(error => {
      dispatch(postErrorActionCreator(error));
    });
};
export default updatePostOperation;

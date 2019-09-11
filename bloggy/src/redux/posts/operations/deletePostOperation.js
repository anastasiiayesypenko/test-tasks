import axios from 'axios';
import {
  deletePostActionCreator,
  postErrorActionCreator,
} from '../actions/postsListActionCreators';

const deletePostOperation = id => dispatch => {
  axios
    .delete(`https://bloggy-api.herokuapp.com/posts/${id}`)
    .then(() => {
      dispatch(deletePostActionCreator(id));
    })
    .catch(error => {
      dispatch(postErrorActionCreator(error));
    });
};
export default deletePostOperation;

import axios from 'axios';
import {
  createPostActionCreator,
  postErrorActionCreator,
} from '../actions/postsListActionCreators';

const createPostOperation = post => dispatch => {
  axios
    .post('https://bloggy-api.herokuapp.com/posts', post)
    .then(response => {
      dispatch(createPostActionCreator(response.data));
    })
    .catch(error => {
      dispatch(postErrorActionCreator(error));
    });
};
export default createPostOperation;

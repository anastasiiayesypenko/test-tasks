import axios from 'axios';
import {
  loadingActionCreator,
  getAllPostsActionCreator,
  postErrorActionCreator,
} from '../actions/postsListActionCreators';

const getAllPostsOperation = () => dispatch => {
  dispatch(loadingActionCreator());
  axios
    .get('https://bloggy-api.herokuapp.com/posts')
    .then(response => {
      dispatch(getAllPostsActionCreator(response.data));
    })
    .catch(error => {
      dispatch(postErrorActionCreator(error));
    });
};
export default getAllPostsOperation;

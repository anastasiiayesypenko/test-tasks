import axios from 'axios';
import { addCommentActionCreator } from '../actions/commentActionCreators';

const addCommentOperation = comment => dispatch => {
  axios
    .post(`https://bloggy-api.herokuapp.com/comments`, comment)
    .then(response => dispatch(addCommentActionCreator(response.data)))
    .catch(error => console.log(error));
};
export default addCommentOperation;

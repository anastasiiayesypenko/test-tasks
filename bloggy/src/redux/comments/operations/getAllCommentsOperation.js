import axios from 'axios';
import { getAllCommentsActionCreator } from '../actions/commentActionCreators';

const getAllCommentsOperation = () => dispatch => {
  axios
    .get('https://bloggy-api.herokuapp.com/comments')
    .then(result => dispatch(getAllCommentsActionCreator(result.data)));
};
export default getAllCommentsOperation;

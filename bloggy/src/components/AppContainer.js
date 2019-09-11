import { connect } from 'react-redux';
import App from './App';
import getAlLPostsOperation from '../redux/posts/operations/getAllPostsOperation';
import getAllCommentsOperation from '../redux/comments/operations/getAllCommentsOperation';

const mapDispatchToProps = dispatch => ({
  getAllPosts: posts => dispatch(getAlLPostsOperation(posts)),
  getAllComments: comments => dispatch(getAllCommentsOperation(comments)),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);

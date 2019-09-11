import { connect } from 'react-redux';
import PostsPage from './PostsPage';
import deletePostOperation from '../../redux/posts/operations/deletePostOperation';

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
  loading: state.loading,
});
const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePostOperation(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPage);

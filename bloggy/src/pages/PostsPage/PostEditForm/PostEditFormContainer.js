import { connect } from 'react-redux';
import PostEditForm from './PostEditForm';
import updatePostOperation from '../../../redux/posts/operations/updatePostOperation';
import addCommentOperation from '../../../redux/comments/operations/addCommentOperation';

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});
const mapDispatchToProps = dispatch => ({
  updatePost: updatedPost => dispatch(updatePostOperation(updatedPost)),
  addComment: comment => dispatch(addCommentOperation(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostEditForm);

import { connect } from 'react-redux';
import Form from './Form';
import createPostOperation from '../../redux/posts/operations/createPostOperation';

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPostOperation(post)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);

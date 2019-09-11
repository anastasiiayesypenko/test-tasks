import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 1100px;
  height: 300px;
  margin: 0 auto;
  border-radius: 2px;
  margin-top: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const StyledInput = styled.input`
  width: 1000px;
  height: 30px;
  margin: 0 auto;
  font-size: 22px;
  border-radius: 10px;
  border: 1px solid #354854;
  margin-top: 20px;
  font-weight: 300;
  padding: 15px;
  resize: none;
  outline: none;
`;
const StyledTextarea = styled.textarea`
  width: 1000px;
  height: 50px;
  margin: 0 auto;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  height: 230px;
  resize: none;
  font-weight: 300;
  outline: none;
  border: 1px solid #354854;
  margin-top: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const StyledButton = styled.button`
  padding: 7px;
  color: #fff;
  background-color: #1e8a71;
  width: 200px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :disabled {
    color: #c6d3c6;
    opacity: 0.4;
    background: #92929c;
  }
`;
const StyledCommentsTitle = styled.h3`
  color: #354854;
`;
const StyledCommentsDiv = styled.div`
  color: #354854;
  text-align: center;
  margin: 0 auto;
  width: 1100px;
`;
const StyledCommentsUl = styled.ul`
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  width: 1000px;
  list-style: none;
`;
const StyledCommentsLI = styled.li`
  padding: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const StyledCommentForm = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 1000px;
  margin-top: 20px;
  border-radius: 2px;
`;
const StyledCommentInput = styled.input`
  height: 30px;
  width: 700px;
  padding: 3px;
  border-radius: 10px;
  font-size: 17px;
`;
const StyledButtonComment = styled.button`
  padding: 7px;
  color: #fff;
  cursor: pointer;
  background-color: #1e8a71;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
`;
class PostEditForm extends Component {
  constructor() {
    super();
    this.state = {
      buttonSaveDisabled: true,
      postTitle: '',
      postText: '',
      commentText: '',
      commentsAboutPost: false,
    };
  }

  componentDidMount() {
    const { posts, match, comments } = this.props;

    // check post with ID from url

    const post = posts.find(postFormList =>
      typeof postFormList.id === 'string'
        ? postFormList.id === match.params.id
        : postFormList.id === Number(match.params.id),
    );
    this.setState({
      postTitle: post && post.title,
      postText: post && post.body,
    });

    // check comments available
    const comment = comments.filter(
      commentItem => commentItem.postId === match.params.id,
    );
    this.setState({
      commentsAboutPost: comment,
    });
  }

  handleTitleChange = e => {
    this.setState({
      buttonSaveDisabled: false,
      postTitle: e.target.value,
    });
  };

  handleTextChange = e => {
    this.setState({
      buttonSaveDisabled: false,
      postText: e.target.value,
    });
  };

  handleSaveEdition = e => {
    const { postTitle, postText } = this.state;
    const { match } = this.props;
    e.preventDefault();
    if (postTitle && postText) {
      const editedPost = {
        id: match.params.id,
        title: postTitle,
        body: postText,
      };
      this.props.updatePost(editedPost);
      toast.info(`New post "${postTitle}" was successfully edited!`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error('Please, fill all fields!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  handleCommentTyping = e => {
    this.setState({
      commentText: e.target.value,
    });
  };

  addComment = () => {
    const { commentText, commentsAboutPost } = this.state;
    const { addComment, match } = this.props;

    const requestComment = {
      postId: match.params.id,
      body: commentText,
    };
    addComment(requestComment);
    this.setState({
      commentText: '',
      commentsAboutPost: [...commentsAboutPost, requestComment],
    });
  };

  render() {
    const {
      postText,
      postTitle,
      buttonSaveDisabled,
      commentText,
      commentsAboutPost,
    } = this.state;
    const { posts } = this.props;

    return (
      <div>
        {posts && (
          <StyledForm>
            <StyledInput
              type="text"
              onChange={this.handleTitleChange}
              value={postTitle}
            />

            <StyledTextarea
              type="text"
              onChange={this.handleTextChange}
              value={postText}
            />

            <StyledButton
              type="button"
              onClick={this.handleSaveEdition}
              disabled={buttonSaveDisabled}
            >
              Save changes
            </StyledButton>
          </StyledForm>
        )}

        <section>
          {commentsAboutPost.length > 0 && (
            <StyledCommentsDiv>
              <StyledCommentsTitle> Comments: </StyledCommentsTitle>

              <StyledCommentsUl>
                {commentsAboutPost.map(comment => (
                  <StyledCommentsLI key={comment.id}>
                    <p> {comment.body} </p>
                  </StyledCommentsLI>
                ))}
              </StyledCommentsUl>
            </StyledCommentsDiv>
          )}

          <StyledCommentForm onSubmit={this.addComment}>
            <StyledCommentInput
              type="text"
              onChange={this.handleCommentTyping}
              value={commentText}
              placeholder="Enter your comment here"
            />
            <StyledButtonComment type="submit">Add comment</StyledButtonComment>
          </StyledCommentForm>
        </section>

        <StyledButton>
          <NavLink to="/posts"> Back to all posts </NavLink>
        </StyledButton>

        <ToastContainer />
      </div>
    );
  }
}
PostEditForm.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addComment: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  updatePost: PropTypes.func.isRequired,
};
export default PostEditForm;

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid4 from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 1100px;
  height: 400px;
  margin: 0 auto;
  border-radius: 2px;
  margin-top: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const StyledInput = styled.textarea`
  width: 1000px;
  height: 30px;
  margin: 0 auto;
  font-size: 22px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: 300;
  padding: 10px;
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
  margin-top: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const StyledButton = styled.button`
  padding: 10px;
  color: #fff;
  background-color: #1e8a71;
  width: 300px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  text-transform: uppercase;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Form = ({ createPost }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');

  const handleTitleChange = e => {
    setPostTitle(e.target.value);
  };
  const handleTextChange = e => {
    setPostText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (postTitle && postText) {
      const newPost = {
        id: uuid4(),
        title: postTitle,
        body: postText,
      };
      createPost(newPost);
      toast.info(`New post "${postTitle}" was successfully created!`, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setPostTitle('');
      setPostText('');
    } else {
      toast.error('Please, fill all fields!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        onChange={handleTitleChange}
        value={postTitle}
        placeholder="Enter post title here..."
      />
      <StyledTextarea
        type="text"
        onChange={handleTextChange}
        value={postText}
        placeholder="Enter text here..."
      />
      <StyledButton type="submit"> create post </StyledButton>

      <ToastContainer />
    </StyledForm>
  );
};
Form.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default Form;

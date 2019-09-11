import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import styles from './PostItem.module.css';

const StyledButton = styled.button`
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  width: 130px;
  font-size: 17px;
  height: 30px;
  background: #92929c;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const PostItem = ({ id, title, text, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  const handleEdit = () => {};
  return (
    <div>
      <h3> {title} </h3> <p> {text} </p>
      <StyledButtonDiv>
        <StyledButton type="button" onClick={handleEdit}>
          <NavLink to={`/posts/${id}`} className={styles.navlink}>
            Open
          </NavLink>
        </StyledButton>

        <StyledButton type="button" onClick={handleDelete}>
          Delete
        </StyledButton>
      </StyledButtonDiv>
    </div>
  );
};
PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default PostItem;

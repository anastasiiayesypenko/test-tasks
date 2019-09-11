import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../components/Loader/Loader';

import PostItem from './PostItem/PostItem';

const StyledList = styled.ul`
  margin: 0 auto;
  margin-top: 30px;
  max-width: 1400px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  border-radius: 2px;
`;
const StyledListItem = styled.ul`
  width: 400px;
  word-wrap: break-word;
  padding: 25px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const PostsPage = ({ loading, posts, deletePost }) => {
  return (
    <section>
      {loading && <Loader />}

      {posts && (
        <StyledList>
          {posts.map(post => (
            <StyledListItem key={post.id}>
              <PostItem
                id={post.id}
                title={post.title}
                text={post.body}
                onDelete={deletePost}
              />
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </section>
  );
};

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  loading: PropTypes.bool.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsPage;

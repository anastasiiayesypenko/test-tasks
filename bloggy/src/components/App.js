import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Main from '../pages/Main/Main';
import PostsPage from '../pages/PostsPage/PostsPageContainer';
import PostEditForm from '../pages/PostsPage/PostEditForm/PostEditFormContainer';

const StyledWrapper = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Raleway';
`;
class App extends Component {
  componentDidMount() {
    const { getAllPosts, getAllComments } = this.props;
    getAllPosts();
    getAllComments();
  }

  render() {
    return (
      <StyledWrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/posts/:id" exact component={PostEditForm} />

          <Route path="/posts" component={PostsPage} />

          <Redirect
            to="/
      "
          />
        </Switch>
      </StyledWrapper>
    );
  }
}

App.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  getAllComments: PropTypes.func.isRequired,
};

export default App;



import { connect } from 'react-redux';
import { updateUser, updatePosts, updatePostsSearch } from '../actions/postActions';
import MainPage from './mainPage';
import { getPostReducer } from "../reducers/postsReducer";
import { getUserReducer } from "../reducers/usersReducer"


const mapStateToProps = (state) => ({
  posts: getPostReducer(state),
  users: getUserReducer(state)
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => {
    dispatch(updateUser())
  },
  getPosts: () => {
    dispatch(updatePosts())
  },

  updatePostsOnSearch: (keyword) => {
    dispatch(updatePostsSearch(keyword))
  }
})

export const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)
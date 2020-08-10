import React, { Component } from 'react';
import Posts from "../shared/posts";
import SearchBar from "../shared/searchBar";
import './mainPage.css';


export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterApplied: false
    }
    props.getUsers();
    props.getPosts();
  }

  handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      console.log(e.target.value);
      this.props.updatePostsOnSearch(value);
      this.setState({ isFilterApplied: true })
    } else {
      this.setState({ isFilterApplied: false })
    }
  }

  render() {
    console.log("posts from Main page", this.props);
    console.log('hurray')
    const { filteredPosts, posts } = this.props.posts;
    const { isFilterApplied } = this.state
    let actualPosts = filteredPosts && filteredPosts.entities.length > 0 ? filteredPosts.entities : posts.entities;
    const { users } = this.props.users;


    return (
      <div>
        <SearchBar onChange={this.handleSearch} />
        <div className="Post-header">List of Posts</div>
        {
          isFilterApplied ? actualPosts.length > 0 ? actualPosts.map((ele) => <Posts post={ele} user={users.entries[ele.userId]} />) : <div>No result found</div> :
            actualPosts && Object.values(actualPosts).map((ele) => <Posts post={ele} user={users.entries[ele.userId]} />)
        }

      </div>
    )
  }
}

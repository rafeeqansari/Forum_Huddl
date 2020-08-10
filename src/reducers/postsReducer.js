import { LOAD_POSTS, UPDATE_SEARCH_POSTS } from '../actions/postActions';
// import { update } from "immutability-helper";
// import { createSelector } from "reselect";
// import { filterPosts } from '../epics/forumEpic';

const initialState = {
  posts: {
    ids: [],
    entities: {},
  },
  filteredPosts: {
    ids: [],
    entities: {}
  }
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_POSTS:
      let posts = action.payload;
      let ids = posts.map(q => q.id);
      let entities = posts.reduce((acc, q) => Object.assign(acc, { [q.id]: q }), {});
      // update(state, { posts: { $set: { ids, entities } } });
      return { posts: { ids, entities } };

    case UPDATE_SEARCH_POSTS:
      if (action.payload) {
        let allPosts = state.posts.entities;
        let entities = Object.values(allPosts).filter((ele) => ele.title.indexOf(action.payload) !== -1 || ele.body.indexOf(action.payload) !== -1)
        let ids = entities.map(q => q.id);
        let result = { ...state, filteredPosts: { ids, entities } };
        return result;
      }
      console.log({ ...state, filteredPosts: { FilteredPosts: [], Filteredids: [] } })
      return { ...state, filteredPosts: { ids: [], entities: [] } }


    default:
      return state;
  }
};


// ===== selectors

export const getPostReducer = state => state.postsReducer

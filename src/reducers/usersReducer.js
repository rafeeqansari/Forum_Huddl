import { UPDATE_USER_COMPLETE, LOAD_USERS } from '../actions/postActions'

const initialState = {
  users: {
    ids: [],
    entries: {},
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_COMPLETE:
      return state;

    case LOAD_USERS:
      const users = action.payload;
      const ids = users.map(q => q.id);
      const entries = users.reduce((acc, q) => Object.assign(acc, { [q.id]: q }), {});
      return { users: { ids, entries } };


    default:
      return state;
  }
};


// ===== selectors

export const getUserReducer = state => state.userReducer
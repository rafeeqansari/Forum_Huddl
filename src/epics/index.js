import { combineEpics } from 'redux-observable';
import { getUsersEpic, getPostsEpic } from './forumEpic';

export const rootEpic = combineEpics(
  getUsersEpic,
  getPostsEpic
);

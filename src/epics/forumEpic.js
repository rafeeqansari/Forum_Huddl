import * as forumActions from '../actions/postActions';
import { ajax } from 'rxjs/ajax';
import Config from '../App.config';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

// epic to get user data with api call
export const getUsersEpic = action$ => action$.pipe(
  ofType(forumActions.UPDATE_USERS),
  mergeMap(() =>
    ajax.getJSON(`${Config.baseUrl}/users`).pipe(
      map(response => forumActions.loadUsers(response))
    )
  )
);

export const getPostsEpic = action$ => action$.pipe(
  ofType(forumActions.UPDATE_POSTS),
  mergeMap(() =>
    ajax.getJSON(`${Config.baseUrl}/posts`).pipe(
      map(response => forumActions.loadPosts(response))
    )
  )
);

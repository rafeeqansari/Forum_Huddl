import { ajax } from 'rxjs/ajax';

export const getUsers$ = ajax(`https://jsonplaceholder.typicode.com/users`)
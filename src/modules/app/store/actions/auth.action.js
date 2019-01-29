import { createAction } from 'redux-act';


export const SET_AUTH_TOKEN = createAction('get token :: done');
export const REMOVE_AUTH_TOKEN = createAction('remove token :: error');
export const ERR_AUTH = createAction('get code :: error');


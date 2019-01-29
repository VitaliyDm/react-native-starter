import { createReducer } from 'redux-act';

import { SET_AUTH_TOKEN, ERR_AUTH, REMOVE_AUTH_TOKEN } from '../actions';

export default createReducer({
    [SET_AUTH_TOKEN]: (state, token) => ({
        ...state,
        token,
        isLogIn: true,
    }),
    [ERR_AUTH]: (state, errors) => ({
        ...state,
        errors,
    }),
    [REMOVE_AUTH_TOKEN]: (state) => ({
        ...state,
        token:'',
        isLogIn: false,
    }),

}, {
    code: '',
    errors: '',
    token: '',
    isLogIn:false,
});

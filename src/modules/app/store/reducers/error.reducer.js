import { createReducer } from 'redux-act';

import { ADD_ERR, CLEAR_ERRORS } from '../actions';

export default createReducer({
    [ADD_ERR]: (state, errors) => ({
        ...state,
        errors,
        count: errors.length,
    }),
    [CLEAR_ERRORS]: (state) => ({
        ...state,
        errors: '',
        count: 0,
    }),

}, {
    errors: '',
    count: 0,
});

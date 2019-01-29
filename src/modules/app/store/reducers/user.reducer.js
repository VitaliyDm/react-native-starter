import { createReducer } from 'redux-act';

import { setUserPhone, setUserInfo } from '../actions';

export default createReducer({
    [setUserPhone]: (state, phone) => ({
        ...state,
        phone,
    }),
    [setUserInfo]: (state, user) => ({
        ...state,
        ...user,
    }),
}, {
    phone: '',
    name: '',
    secondName: '',
    sex: '',
    city: '',
    country: '',
});

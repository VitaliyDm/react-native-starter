import request from '../../../../core/services/request';
import { SET_AUTH_TOKEN, ADD_ERR, REMOVE_AUTH_TOKEN, CLEAR_ERRORS } from '../actions'
import * as config from '../../../../core/environment';
import { AsyncStorage } from 'react-native';


const defaultRequestParams = {
    client_id: 1,
    redirect_uri: 'default',
    client_secret: 'secretQuery',
};

export const getAuthorizeCode = (login, password) => dispatch =>
    request.get(`${config.API}/api/auth.get`, {login, password, ...defaultRequestParams, display: 'none',
        scope: 1})
        .then(payload => {

            dispatch(CLEAR_ERRORS());
            let code = payload.data[0].code;
            dispatch(getAuthorizeToken(code));

        }, e => dispatch(ADD_ERR(e.response.data.errors)));


export const getAuthorizeToken = (code) => dispatch =>
    request.get(`${config.API}/api/auth.token`, {...defaultRequestParams, code}, {})
        .then(payload => {
            dispatch(CLEAR_ERRORS());
            dispatch(setUserToken(payload.data[0]));

        },  e => dispatch(ADD_ERR(e.response.data.errors)));



export const setUserToken = (token) => dispatch =>

    AsyncStorage.setItem(config.SESSION.KEY,JSON.stringify(token))
        .then(() => {
            dispatch(CLEAR_ERRORS());
            dispatch(SET_AUTH_TOKEN(token));

        })
        .catch(() => dispatch(ADD_ERR("AsyncStorage Problem")));


export const getUserToken = () => dispatch =>
    AsyncStorage.getItem(config.SESSION.KEY)
        .then((data) => {
            if (data !== null) {
                dispatch(CLEAR_ERRORS());
                dispatch(SET_AUTH_TOKEN(JSON.parse(data)));

            }
        })
        .catch(() => dispatch(ADD_ERR("AsyncStorage Problem")));


export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem(config.SESSION.KEY)
        .then(() => {
            dispatch(CLEAR_ERRORS());
            dispatch(REMOVE_AUTH_TOKEN());
        })
        .catch(() => dispatch(ADD_ERR("AsyncStorage Problem")));




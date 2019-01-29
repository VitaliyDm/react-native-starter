import {setUserPhone, setUserInfo } from "../actions";

export const setPhone = phone => dispatch => dispatch(setUserPhone(phone));
export const setInfo = info => dispatch => dispatch(setUserInfo(info));

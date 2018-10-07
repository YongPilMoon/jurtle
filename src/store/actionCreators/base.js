import * as api from '../../lib/api';
import { createAction } from 'redux-actions';
import {
  SHOW_MODAL, HIDE_MODAL, LOGIN, LOGIN_FAIL, CHECK_LOGIN, CHANGE_PASSWORD_INPUT,
  INITIALIZE_LOGIN_MODAL, LOGOUT, TEMP_LOGIN,
} from '../reducers/base';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const tempLogin = createAction(TEMP_LOGIN);
export const login = password => async (dispatch) => {
  try {
    const result = await api.login(password);
    const { token } = result.headers;
    localStorage.setItem('token', token);
    api.setAuthToken(token);
    dispatch({
      type: LOGIN,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
    });
    throw 'login error';
  }
};


export const logout = () => async (dispatch) => {
  try {
    await api.logout();
    dispatch({
      type: LOGOUT,
    });
  } catch (e) {
    console.log(e);
  }
};

export const checkLogin = () => async (dispatch) => {
  try {
    const token = localStorage.token;
    api.setAuthToken(token);
    const result = await api.checkLogin(token);
    dispatch({
      type: CHECK_LOGIN,
      payload: result,
    });
  } catch (e) {
    console.log(e);
  }
};


export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);


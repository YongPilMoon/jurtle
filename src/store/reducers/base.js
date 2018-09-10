import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
export const SHOW_MODAL = 'base/SHOW_MODAL';
export const HIDE_MODAL = 'base/HIDE_MODAL';

export const LOGIN = 'base/LOGIN';
export const LOGIN_FAIL = 'base/LOGIN_FAIL';
export const LOGOUT = 'base/LOGOUT';
export const CHECK_LOGIN = 'base/CHECK_LOGIN';
export const CHANGE_PASSWORD_INPUT = 'base/CHANGE_PASSWORD_INPUT';
export const INITIALIZE_LOGIN_MODAL = 'base/INITIALIZE_LOGIN_MODAL';
export const TEMP_LOGIN = 'base/TEMP_LOGIN';

const initialState = Map({
  modal: Map({
    remove: false,
    login: false
  }),
  loginModal: Map({
    password: '',
    error: false
  }),
  logged: false
});

export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], true);
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], false);
  },
  [LOGIN]: (state, action) => {
    return state.set('logged', true);
  },
  [LOGIN_FAIL]: (state, action) => {
    return state.setIn(['loginModal', 'error'], true)
      .setIn(['loginModal', 'password'], '')
  },
  [CHECK_LOGIN]: (state, action) => {
    const { logged } = action.payload.data;
    return state.set('logged', logged);
  },
  [CHANGE_PASSWORD_INPUT]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['loginModal', 'password'], value);
  },
  [INITIALIZE_LOGIN_MODAL]: (state, action) => {
    return state.set('loginModal', initialState.get('loginModal'));
  },
  [TEMP_LOGIN]: (state, action) => {
    return state.set('logged', true);
  }
}, initialState)
import { handleActions, createAction } from 'redux-actions';
import { fromJS, Map } from 'immutable';
import * as api from '../../lib/api';

export const INIT_POST = 'INIT_POST';
export const GET_POST = 'GET_POST';
export const REMOVE_POST = 'REMOVE_POST';

// initial state
const initialState = Map({
  post: Map({}),
});

export const initPost = createAction(INIT_POST);
export const getPost = id => async (dispatch) => {
  try {
    const result = await api.getPost(id);
    dispatch({
      type: GET_POST,
      payload: result.data,
    });
  } catch (e) {
    return console.log(e);
  }
};

export const removePost = id => async (dispatch) => {
  try {
    const result = await api.removePost(id);
    dispatch({
      type: REMOVE_POST,
      payload: result.data,
    });
  } catch (e) {
    return console.log(e);
  }
};



// reducer
export default handleActions({
  [GET_POST]: (state, action) => {
    const post = action.payload;
    console.log(post);
    return state.set('post', fromJS(post));
  },
  [INIT_POST]: (state, action) => initialState,
}, initialState);

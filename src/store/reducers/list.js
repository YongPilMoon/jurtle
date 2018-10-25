import { handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import * as api from '../../lib/api';

const GET_POST_LIST = 'GET_POST_LIST';
const GET_MORE_POST_LIST = 'GET_MORE_POST_LIST';
const FETCH_POST_LIST = 'FETCH_POST_LIST';

// initial state
const initialState = Map({
  loading: false,
  posts: List(),
  lastPage: 0,
});

export const getPostList = ({ page, tag }) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_POST_LIST,
    });
    const result = await api.getPostList({ tag, page });
    dispatch({
      type: GET_POST_LIST,
      payload: result,
    });
  } catch (e) {
    return console.log(e);
  }
};

export const getMorePostList = ({ page, tag }) => async (dispatch) => {
  try {
    const result = await api.getPostList({ tag, page });
    dispatch({
      type: GET_MORE_POST_LIST,
      payload: result,
    });
  } catch (e) {
    return console.log(e);
  }
};

// reducer
export default handleActions({
  [GET_POST_LIST]: (state, action) => {
    const posts = action.payload.data;
    const lastPage = parseInt(action.payload.headers['last-page'], 10);
    return state.set('posts', fromJS(posts)).set('lastPage', lastPage).set('loading', false);
  },
  [GET_MORE_POST_LIST]: (state, action) => {
    const newPosts = action.payload.data;
    const lastPage = parseInt(action.payload.headers['last-page'], 10);
    return state.set('posts', state.get('posts').concat(newPosts)).set('lastPage', lastPage).set('loading', false);
  },
  [FETCH_POST_LIST]: state => state.set('loading', true),
}, initialState);

import { handleActions, createAction } from 'redux-actions';
import { Map } from 'immutable';
import * as api from '../../lib/api';

export const EDITOR_INITIALIZE = 'EDITOR_INITIALIZE';
export const EDITOR_CHANGE_INPUT = 'EDITOR_CHANGE_INPUT';
export const EDITOR_WRITE_POST = 'EDITOR_WRITE_POST';
export const EDITOR_GET_POST = 'EDITOR_GET_POST';
export const EDITOR_EDIT_POST = 'EDITOR_EDIT_POST';
export const EDITOR_CHANGE_PUBLISHED = 'EDITOR_CHANGE_PUBLISHED';

// initial state
const initialState = Map({
  title: '',
  markdown: '',
  mainImg: '',
  tags: '',
  published: false,
  postId: null,
});

// action creators
export const initialize = () => ({
  type: EDITOR_INITIALIZE,
});

export const changeInput = payload => ({ type: EDITOR_CHANGE_INPUT,
  payload,
});

export const writePost = post => async (dispatch) => {
  try {
    const result = await api.writePost(post);
    dispatch({
      type: EDITOR_WRITE_POST,
      payload: result.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getPost = id => async (dispatch) => {
  try {
    const result = await api.getPost(id);
    dispatch({
      type: EDITOR_GET_POST,
      payload: result.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const editPost = post => async (dispatch) => {
  try {
    const result = await api.editPost(post);
    dispatch({
      type: EDITOR_EDIT_POST,
      payload: result.data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const changePublished = createAction(EDITOR_CHANGE_PUBLISHED);

// reducer
export default handleActions({
  [EDITOR_INITIALIZE]: (state, action) => initialState,
  [EDITOR_CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
  [EDITOR_WRITE_POST]: (state, action) => {
    const { _id } = action.payload;
    return state.set('postId', _id);
  },
  [EDITOR_GET_POST]: (state, action) => {
    const { title, tags, body, mainImg, published } = action.payload;
    return state.set('title', title)
      .set('markdown', body)
      .set('tags', tags.join(', '))
      .set('mainImg', mainImg)
      .set('published', published);
  },
  [EDITOR_CHANGE_PUBLISHED]: (state, action) => state.set('published', action.payload),
}, initialState);

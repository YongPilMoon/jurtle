import * as api from '../../lib/api';

export const EDITOR_INITIALIZE = 'EDITOR_INITIALIZE';
export const EDITOR_CHANGE_INPUT = 'EDITOR_CHANGE_INPUT';
export const EDITOR_WRITE_POST = 'EDITOR_WRITE_POST';
export const EDITOR_GET_POST = 'EDITOR_GET_POST';
export const EDITOR_EDIT_POST = 'EDITOR_EDIT_POST';

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


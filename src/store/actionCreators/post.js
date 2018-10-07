import { GET_POST, REMOVE_POST } from '../reducers/post';
import * as api from '../../lib/api';

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

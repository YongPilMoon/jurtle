import { GET_POST_LIST } from '../reducers/list';
import * as api from '../../lib/api';

export const getPostList = ({ page, tag }) => async (dispatch) => {
  try {
    const result = await api.getPostList({ tag, page });
    dispatch({
      type: GET_POST_LIST,
      payload: result,
    });
  } catch (e) {
    return console.log(e);
  }
};

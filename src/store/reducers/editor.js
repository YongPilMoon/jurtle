import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { EDITOR_INITIALIZE,
  EDITOR_CHANGE_INPUT,
  EDITOR_WRITE_POST,
  EDITOR_GET_POST } from '../actionCreators/editor';

// initial state
const initialState = Map({
  title: '',
  markdown: '',
  tags: '',
  postId: null,
});

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
    const { title, tags, body } = action.payload;
    return state.set('title', title)
      .set('markdown', body)
      .set('tags', tags.join(', '));
  },
}, initialState);

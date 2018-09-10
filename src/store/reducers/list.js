import { handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

export const GET_POST_LIST = 'GET_POST_LIST';

// initial state
const initialState = Map({
  posts: List(),
  lastPage: null
});

// reducer
export default handleActions({
  [GET_POST_LIST]: (state, action) => {
    const posts = action.payload.data;
    const lastPage = parseInt(action.payload.headers['last-page'], 10);
    return state.set('posts', fromJS(posts)).set('lastPage', lastPage)
  }
}, initialState)
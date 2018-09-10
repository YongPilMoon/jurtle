import {handleActions} from 'redux-actions';
import {fromJS, Map} from 'immutable';

export const GET_POST = 'GET_POST';
export const REMOVE_POST = 'REMOVE_POST';

// initial state
const initialState = Map({
  post: Map({})
});

// reducer
export default handleActions({
  [GET_POST]: (state, action) => {
    const post = action.payload;
    return state.set('post', fromJS(post))
  }
}, initialState)
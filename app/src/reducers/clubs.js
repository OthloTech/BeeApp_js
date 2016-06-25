import { handleActions } from 'redux-actions';

export default handleActions({
  'clubs.All': (state, action) => {
    if(action.error) {
      return state;
    } else {
      return action.payload.data;
    }
  }
}, {});

import { fromJS } from 'immutable';

import {
  TOGGLE_DRAWER,
  LOGIN_SUCCESS,
} from './constants';

const initialState = fromJS({
  drawerOpen: false,
  JWT: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      if (state.get('drawerOpen')) {
        return state
          .set('drawerOpen', false);
      }
      return state
        .set('drawerOpen', true);
    case LOGIN_SUCCESS:
      return state
        .set('JWT', action.result.token);
    default:
      return state;
  }
}

export default appReducer;

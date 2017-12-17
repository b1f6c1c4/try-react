import { fromJS } from 'immutable';

import {
  TOGGLE_DRAWER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  drawerOpen: false,
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
    default:
      return state;
  }
}

export default appReducer;

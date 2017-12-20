import { fromJS } from 'immutable';

import {
  TOGGLE_DRAWER_OPEN_ACTION,
} from './constants';

const initialState = fromJS({
  isDrawerOpen: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    // Actions
    case TOGGLE_DRAWER_OPEN_ACTION:
      if (state.get('isDrawerOpen')) {
        return state
          .set('isDrawerOpen', false);
      }
      return state
        .set('isDrawerOpen', true);
    // Default
    default:
      return state;
  }
}

export default globalReducer;

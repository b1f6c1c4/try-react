import { fromJS } from 'immutable';

import {
  TOGGLE_DRAWER_OPEN_ACTION,
} from './constants';

const initialState = fromJS({
  isDrawerOpen: 'the isDrawerOpen',
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    // Actions
    case TOGGLE_DRAWER_OPEN_ACTION:
      return state;
    // Default
    default:
      return state;
  }
}

export default globalReducer;

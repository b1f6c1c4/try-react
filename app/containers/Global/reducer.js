import { fromJS } from 'immutable';

import {
  DEFAULT_ACTION,
  EXTERNAL_REQUEST,
  EXTERNAL_SUCCESS,
  EXTERNAL_FAILURE,
} from './constants';

const initialState = fromJS({
  data: 'the data',
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    // Actions
    case DEFAULT_ACTION:
      return state;
    // Sagas
    case EXTERNAL_REQUEST:
      return state;
    case EXTERNAL_SUCCESS:
      return state;
    case EXTERNAL_FAILURE:
      return state;
    // Default
    default:
      return state;
  }
}

export default globalReducer;

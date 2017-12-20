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
    case DEFAULT_ACTION:
      return state;
    case EXTERNAL_REQUEST:
      return state;
    case EXTERNAL_SUCCESS:
      return state;
    case EXTERNAL_FAILURE:
      return state;
    default:
      return state;
  }
}

export default globalReducer;

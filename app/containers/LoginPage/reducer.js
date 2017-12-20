import { fromJS } from 'immutable';

import {
  SUBMIT_LOGIN_ACTION,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

const initialState = fromJS({
  isLoading: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    // Actions
    case SUBMIT_LOGIN_ACTION:
      return state;
    // Sagas
    case LOGIN_REQUEST:
      return state.set('isLoading', true);
    case LOGIN_SUCCESS:
      return state.set('isLoading', false);
    case LOGIN_FAILURE:
      return state.set('isLoading', false);
    // Default
    default:
      return state;
  }
}

export default loginPageReducer;

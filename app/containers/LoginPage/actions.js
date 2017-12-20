import {
  SUBMIT_LOGIN_ACTION,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

// Actions
export function submitLoginAction() {
  return {
    type: SUBMIT_LOGIN_ACTION,
  };
}

// Sagas
export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(result) {
  return {
    type: LOGIN_SUCCESS,
    result,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

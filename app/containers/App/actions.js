import {
  TOGGLE_DRAWER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}

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

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

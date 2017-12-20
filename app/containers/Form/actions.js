import {
  DEFAULT_ACTION,
  EXTERNAL_REQUEST,
  EXTERNAL_SUCCESS,
  EXTERNAL_FAILURE,
} from './constants';

// Actions
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

// Sagas
export function externalRequest() {
  return {
    type: EXTERNAL_REQUEST,
  };
}

export function externalSuccess(result) {
  return {
    type: EXTERNAL_SUCCESS,
    result,
  };
}

export function externalFailure(error) {
  return {
    type: EXTERNAL_FAILURE,
    error,
  };
}

import { fromJS } from 'immutable';

import loginPageReducer from '../reducer';

import {
  submitLoginAction,
  loginRequest,
  loginSuccess,
  loginFailure,
} from '../actions';

describe('loginPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isLoading: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(loginPageReducer(undefined, {})).toEqual(expectedResult);
  });

  // Actions
  it('should handle submitLogin action', () => {
    const originalState = state;
    const expectedResult = state;

    expect(loginPageReducer(originalState, submitLoginAction())).toEqual(expectedResult);
  });

  // Sagas
  it('should handle login request', () => {
    const originalState = state;
    const expectedResult = state.set('isLoading', true);

    expect(loginPageReducer(originalState, loginRequest())).toEqual(expectedResult);
  });

  it('should handle login success', () => {
    const originalState = state.set('isLoading', true);
    const result = { };
    const expectedResult = state.set('isLoading', false);

    expect(loginPageReducer(originalState, loginSuccess(result))).toEqual(expectedResult);
  });

  it('should handle login failure', () => {
    const originalState = state.set('isLoading', true);
    const error = { };
    const expectedResult = state.set('isLoading', false);

    expect(loginPageReducer(originalState, loginFailure(error))).toEqual(expectedResult);
  });
});

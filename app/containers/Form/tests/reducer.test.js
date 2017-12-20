import { fromJS } from 'immutable';

import formReducer from '../reducer';

import {
  defaultAction,
  externalRequest,
  externalSuccess,
  externalFailure,
} from '../actions';

describe('formReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      data: 'the data',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(formReducer(undefined, {})).toEqual(expectedResult);
  });

  // Actions
  it('should handle default action', () => {
    const originalState = state;
    const expectedResult = state;

    expect(formReducer(originalState, defaultAction())).toEqual(expectedResult);
  });

  // Sagas
  it('should handle external request', () => {
    const originalState = state;
    const expectedResult = state;

    expect(formReducer(originalState, externalRequest())).toEqual(expectedResult);
  });

  it('should handle external success', () => {
    const originalState = state;
    const result = { };
    const expectedResult = state;

    expect(formReducer(originalState, externalSuccess(result))).toEqual(expectedResult);
  });

  it('should handle external failure', () => {
    const originalState = state;
    const error = { };
    const expectedResult = state;

    expect(formReducer(originalState, externalFailure(error))).toEqual(expectedResult);
  });
});

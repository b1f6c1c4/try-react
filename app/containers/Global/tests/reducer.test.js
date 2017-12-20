import { fromJS } from 'immutable';

import globalReducer from '../reducer';

import {
  defaultAction,
  externalRequest,
  externalSuccess,
  externalFailure,
} from '../actions';

describe('globalReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      data: 'the data',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(globalReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle default action', () => {
    const originalState = state;
    const expectedResult = state;

    expect(globalReducer(originalState, defaultAction())).toEqual(expectedResult);
  });

  it('should handle external request', () => {
    const originalState = state;
    const expectedResult = state;

    expect(globalReducer(originalState, externalRequest())).toEqual(expectedResult);
  });

  it('should handle external success', () => {
    const originalState = state;
    const result = { };
    const expectedResult = state;

    expect(globalReducer(originalState, externalSuccess(result))).toEqual(expectedResult);
  });

  it('should handle external failure', () => {
    const originalState = state;
    const error = { };
    const expectedResult = state;

    expect(globalReducer(originalState, externalFailure(error))).toEqual(expectedResult);
  });
});

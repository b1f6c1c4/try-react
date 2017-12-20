import { fromJS } from 'immutable';

import globalReducer from '../reducer';

import {
  toggleDrawerOpenAction,
} from '../actions';

describe('globalReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isDrawerOpen: 'the isDrawerOpen',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(globalReducer(undefined, {})).toEqual(expectedResult);
  });

  // Actions
  it('should handle toggleDrawerOpen action', () => {
    const originalState = state;
    const expectedResult = state;

    expect(globalReducer(originalState, toggleDrawerOpenAction())).toEqual(expectedResult);
  });
});

import { fromJS } from 'immutable';

import globalReducer from '../reducer';

import {
  toggleDrawerOpenAction,
} from '../actions';

describe('globalReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isDrawerOpen: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(globalReducer(undefined, {})).toEqual(expectedResult);
  });

  // Actions
  it('should handle toggleDrawerOpen action: close', () => {
    const originalState = state;
    const expectedResult = state.set('isDrawerOpen', true);

    expect(globalReducer(originalState, toggleDrawerOpenAction())).toEqual(expectedResult);
  });

  it('should handle toggleDrawerOpen action: open', () => {
    const originalState = state.set('isDrawerOpen', true);
    const expectedResult = state.set('isDrawerOpen', false);

    expect(globalReducer(originalState, toggleDrawerOpenAction())).toEqual(expectedResult);
  });
});

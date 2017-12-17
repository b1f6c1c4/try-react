import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  toggleDrawer,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      drawerOpen: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle drawer open action correctly', () => {
    const originalState = state
      .set('drawerOpen', false);
    const expectedResult = state
      .set('drawerOpen', true);

    expect(appReducer(originalState, toggleDrawer())).toEqual(expectedResult);
  });

  it('should handle drawer close action correctly', () => {
    const originalState = state
      .set('drawerOpen', true);
    const expectedResult = state
      .set('drawerOpen', false);

    expect(appReducer(originalState, toggleDrawer())).toEqual(expectedResult);
  });
});

import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectGlobalIsDrawerOpen,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const state = fromJS({
      key: 'value',
    });
    const mockedState = fromJS({
      global: state,
    });
    expect(selectGlobal(mockedState)).toEqual(state);
  });
});

describe('makeSelectGlobalIsDrawerOpen', () => {
  const selectGlobalIsDrawerOpen = makeSelectGlobalIsDrawerOpen();

  it('should select isDrawerOpen', () => {
    const isDrawerOpen = fromJS({
      key: 'value',
    });
    const state = fromJS({
      isDrawerOpen,
    });
    const mockedState = fromJS({
      global: state,
    });
    expect(selectGlobalIsDrawerOpen(mockedState)).toEqual(isDrawerOpen);
  });
});

import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectGlobalData,
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

describe('makeSelectGlobalData', () => {
  const selectGlobalData = makeSelectGlobalData();

  it('should select data', () => {
    const data = fromJS({
      key: 'value',
    });
    const state = fromJS({
      data,
    });
    const mockedState = fromJS({
      global: state,
    });
    expect(selectGlobalData(mockedState)).toEqual(data);
  });
});

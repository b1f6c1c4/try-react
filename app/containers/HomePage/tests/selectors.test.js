import { fromJS } from 'immutable';

import {
  selectHomePage,
  makeSelectHomePageData,
} from '../selectors';

describe('selectHomePage', () => {
  it('should select the homePage state', () => {
    const state = fromJS({
      key: 'value',
    });
    const mockedState = fromJS({
      homePage: state,
    });
    expect(selectHomePage(mockedState)).toEqual(state);
  });
});

describe('makeSelectHomePageData', () => {
  const selectHomePageData = makeSelectHomePageData();

  it('should select data', () => {
    const data = fromJS({
      key: 'value',
    });
    const state = fromJS({
      data,
    });
    const mockedState = fromJS({
      homePage: state,
    });
    expect(selectHomePageData(mockedState)).toEqual(data);
  });
});

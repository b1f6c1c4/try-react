import { fromJS } from 'immutable';

import {
  selectNotFoundPage,
  makeSelectNotFoundPageData,
} from '../selectors';

describe('selectNotFoundPage', () => {
  it('should select the notFoundPage state', () => {
    const state = fromJS({
      key: 'value',
    });
    const mockedState = fromJS({
      notFoundPage: state,
    });
    expect(selectNotFoundPage(mockedState)).toEqual(state);
  });
});

describe('makeSelectNotFoundPageData', () => {
  const selectNotFoundPageData = makeSelectNotFoundPageData();

  it('should select data', () => {
    const data = fromJS({
      key: 'value',
    });
    const state = fromJS({
      data,
    });
    const mockedState = fromJS({
      notFoundPage: state,
    });
    expect(selectNotFoundPageData(mockedState)).toEqual(data);
  });
});

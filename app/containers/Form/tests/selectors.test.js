import { fromJS } from 'immutable';

import {
  selectForm,
  makeSelectFormData,
} from '../selectors';

describe('selectForm', () => {
  it('should select the form state', () => {
    const state = fromJS({
      key: 'value',
    });
    const mockedState = fromJS({
      form: state,
    });
    expect(selectForm(mockedState)).toEqual(state);
  });
});

describe('makeSelectFormData', () => {
  const selectFormData = makeSelectFormData();

  it('should select data', () => {
    const data = fromJS({
      key: 'value',
    });
    const state = fromJS({
      data,
    });
    const mockedState = fromJS({
      form: state,
    });
    expect(selectFormData(mockedState)).toEqual(data);
  });
});

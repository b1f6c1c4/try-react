import { fromJS } from 'immutable';

import {
  selectLoginPage,
  makeSelectLoginPageIsLoading,
  makeSelectFormLoginValues,
} from '../selectors';

describe('selectLoginPage', () => {
  it('should select the loginPage state', () => {
    const state = 'value';
    const mockedState = fromJS({
      loginPage: state,
    });
    expect(selectLoginPage(mockedState)).toEqual(state);
  });
});

describe('makeSelectLoginPageIsLoading', () => {
  const selectLoginPageIsLoading = makeSelectLoginPageIsLoading();

  it('should select isLoading', () => {
    const isLoading = 'value';
    const state = fromJS({
      isLoading,
    });
    const mockedState = fromJS({
      loginPage: state,
    });
    expect(selectLoginPageIsLoading(mockedState)).toEqual(isLoading);
  });
});

describe('makeSelectFormLoginValues', () => {
  const selectFormLoginValues = makeSelectFormLoginValues();

  it('should select values', () => {
    const values = {
      key: 'value',
    };
    const login = fromJS({
      values,
    });
    const form = fromJS({
      login,
    });
    const mockedState = fromJS({
      form,
    });
    expect(selectFormLoginValues(mockedState)).toEqual(values);
  });
});

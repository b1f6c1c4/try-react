import { createSelector } from 'reselect';

export const selectLoginPage = (state) => state.get('loginPage');

export const makeSelectLoginPageIsLoading = () => createSelector(
  selectLoginPage,
  (state) => state.get('isLoading'),
);

export const makeSelectFormLoginValues = () => createSelector(
  (state) => state.get('form').get('login').get('values'),
  (state) => state.toJS(),
);

import { createSelector } from 'reselect';

export const selectHomePage = (state) => state.get('homePage');

export const makeSelectHomePageData = () => createSelector(
  selectHomePage,
  (state) => state.get('data'),
);

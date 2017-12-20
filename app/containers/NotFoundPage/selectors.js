import { createSelector } from 'reselect';

export const selectNotFoundPage = (state) => state.get('notFoundPage');

export const makeSelectNotFoundPageData = () => createSelector(
  selectNotFoundPage,
  (state) => state.get('data'),
);

import { createSelector } from 'reselect';

export const selectGlobal = (state) => state.get('global');

export const makeSelectGlobalData = () => createSelector(
  selectGlobal,
  (state) => state.get('data'),
);

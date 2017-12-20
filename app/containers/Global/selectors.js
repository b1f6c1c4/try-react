import { createSelector } from 'reselect';

export const selectGlobal = (state) => state.get('global');

export const makeSelectGlobalIsDrawerOpen = () => createSelector(
  selectGlobal,
  (state) => state.get('isDrawerOpen'),
);

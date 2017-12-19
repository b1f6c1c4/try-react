import { createSelector } from 'reselect';

export const selectGlobal = /* istanbul ignore next */ (state) => state.get('global');

export const selectDrawerOpen = createSelector(
  selectGlobal,
  /* istanbul ignore next */
  (state) => state.get('drawerOpen'),
);

export const selectJWT = createSelector(
  selectGlobal,
  /* istanbul ignore next */
  (state) => state.get('JWT'),
);

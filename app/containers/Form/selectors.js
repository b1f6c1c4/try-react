import { createSelector } from 'reselect';

export const selectForm = (state) => state.get('form');

export const makeSelectFormData = () => createSelector(
  selectForm,
  (state) => state.get('data'),
);

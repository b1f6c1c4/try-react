import {
  TOGGLE_DRAWER_OPEN_ACTION,
} from '../constants';

import {
  toggleDrawerOpenAction,
} from '../actions';

describe('Global actions', () => {
  // Actions
  describe('toggleDrawerOpen action', () => {
    it('has a type of TOGGLE_DRAWER_OPEN_ACTION', () => {
      expect(toggleDrawerOpenAction().type).toEqual(TOGGLE_DRAWER_OPEN_ACTION);
    });
  });
});

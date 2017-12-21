import * as GLOBAL from '../constants';

import * as globalActions from '../actions';

describe('Global actions', () => {
  // Actions
  describe('toggleDrawerOpen action', () => {
    it('has a type of GLOBAL.TOGGLE_DRAWER_OPEN_ACTION', () => {
      expect(globalActions.toggleDrawerOpen().type).toEqual(GLOBAL.TOGGLE_DRAWER_OPEN_ACTION);
    });
  });
});

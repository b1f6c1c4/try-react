import {
  DEFAULT_ACTION,
} from '../constants';

import {
  defaultAction,
} from '../actions';

describe('Global actions', () => {
  // Actions
  describe('default action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      expect(defaultAction().type).toEqual(DEFAULT_ACTION);
    });
  });
});

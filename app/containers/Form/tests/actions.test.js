import {
  DEFAULT_ACTION,
} from '../constants';

import {
  defaultAction,
} from '../actions';

describe('Form actions', () => {

  // Actions
  describe('default action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });

});

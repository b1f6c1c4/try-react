import {
  SUBMIT_LOGIN_ACTION,
} from '../constants';

import {
  submitLoginAction,
} from '../actions';

describe('LoginPage actions', () => {
  // Actions
  describe('submitLogin action', () => {
    it('has a type of SUBMIT_LOGIN_ACTION', () => {
      expect(submitLoginAction().type).toEqual(SUBMIT_LOGIN_ACTION);
    });
  });
});

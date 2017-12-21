import * as LOGIN_PAGE from '../constants';

import * as loginPageActions from '../actions';

describe('LoginPage actions', () => {
  // Actions
  describe('submitLogin action', () => {
    it('has a type of LOGIN_PAGE.SUBMIT_LOGIN_ACTION', () => {
      expect(loginPageActions.submitLogin().type).toEqual(LOGIN_PAGE.SUBMIT_LOGIN_ACTION);
    });
  });
});

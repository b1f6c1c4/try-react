// import { fromJS } from 'immutable';
// import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import * as api from 'utils/request';

import * as loginPageActions from '../actions';

import {
  handleLoginRequest,
} from '../sagas';

// Sagas
describe('handleLoginRequest Saga', () => {
  const values = {
    key: 'value',
  };

  it('should dispatch the loginPageActions.loginSuccess action if it requests the credential successfully', () => {
    const response = {
      status: 'ok',
      jwt: 'value',
    };

    return expectSaga(handleLoginRequest, api)
      .provide([
        [matchers.call.fn(api.POST, '/login', undefined, values), response],
      ])
      .put(loginPageActions.loginSuccess(response))
      .run();
  });

  it('should call the loginPageActions.loginFailure action if the response errors', () => {
    const error = new Error('value');

    return expectSaga(handleLoginRequest, api)
      .provide([
        [matchers.call.fn(api.POST, '/login', undefined, values), throwError(error)],
      ])
      .put(loginPageActions.loginFailure(error))
      .run();
  });
});

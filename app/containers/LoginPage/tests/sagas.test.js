// import { fromJS } from 'immutable';
// import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import * as api from 'utils/request';

import {
  loginSuccess,
  loginFailure,
} from '../actions';

import {
  makeSelectFormLoginValues,
} from '../selectors';

import {
  handleLoginRequest,
} from '../sagas';

// Sagas
describe('handleLoginRequest Saga', () => {
  const values = {
    key: 'value',
  };

  it('should dispatch the loginSuccess action if it requests the credential successfully', () => {
    const response = {
      status: 'ok',
      jwt: 'value',
    };

    return expectSaga(handleLoginRequest, api)
      .provide([
        [matchers.select.selector(makeSelectFormLoginValues()), values],
        [matchers.call.fn(api.POST, '/login', undefined, values), response],
      ])
      .put(loginSuccess(response))
      .run();
  });

  it('should call the loginFailure action if the response errors', () => {
    const error = new Error('value');

    return expectSaga(handleLoginRequest, api)
      .provide([
        [matchers.select.fn(makeSelectFormLoginValues()), values],
        [matchers.call.fn(api.POST, '/login', undefined, values), throwError(error)],
      ])
      .put(loginFailure(error))
      .run();
  });
});

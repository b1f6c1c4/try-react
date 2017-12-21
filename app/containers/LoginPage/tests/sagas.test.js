import { fromJS } from 'immutable';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import * as api from 'utils/request';

import * as LOGIN_PAGE from '../constants';
import * as loginPageActions from '../actions';

import watcher, {
  handleLoginRequest,
} from '../sagas';

// Sagas
describe('handleLoginRequest Saga', () => {
  const values = {
    key: 'value',
  };
  const state = fromJS({
    form: {
      login: {
        values,
      },
    },
  });

  // eslint-disable-next-line arrow-body-style
  it('should listen LOGIN_REQUEST in the watcher', () => {
    return expectSaga(watcher)
      .take(LOGIN_PAGE.LOGIN_REQUEST)
      .run();
  });

  it('should dispatch the loginSuccess action if it requests the credential successfully', () => {
    const response = {
      status: 'ok',
      jwt: 'value',
    };

    return expectSaga(handleLoginRequest, api)
      .withState(state)
      .provide([
        [matchers.call.fn(api.POST, '/login', undefined, values), response],
      ])
      .put(loginPageActions.loginSuccess(response))
      .run();
  });

  it('should call the loginFailure action if the response errors', () => {
    const error = new Error('value');

    return expectSaga(handleLoginRequest, api)
      .withState(state)
      .provide([
        [matchers.call.fn(api.POST, '/login', undefined, values), throwError(error)],
      ])
      .put(loginPageActions.loginFailure(error))
      .run();
  });
});

// Watcher
describe('watcher', () => {
  // eslint-disable-next-line arrow-body-style
  it('should forward submitLogin to loginRequest', () => {
    return expectSaga(watcher)
      .provide([
        [matchers.put(loginPageActions.loginRequest())],
      ])
      .dispatch(loginPageActions.submitLogin())
      .run();
  });
});

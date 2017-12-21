import { call, put, select, takeEvery } from 'redux-saga/effects';
import { apiPOST } from 'utils/request';

import * as LOGIN_PAGE from './constants';
import * as loginPageActions from './actions';

// Sagas
export function* handleLoginRequest() {
  const json = yield select((state) => state.get('form').get('login').get('values').toJS());

  try {
    const result = yield call(apiPOST, '/login', undefined, json);
    yield put(loginPageActions.loginSuccess(result));
  } catch (err) {
    yield put(loginPageActions.loginFailure(err));
  }
}

// Watcher
/* eslint-disable func-names */
export default /* istanbul ignore next */ function* watcher() {
  /* istanbul ignore next */
  yield takeEvery(LOGIN_PAGE.LOGIN_REQUEST, handleLoginRequest);

  yield takeEvery(LOGIN_PAGE.SUBMIT_LOGIN_ACTION, function* () {
    yield put(loginPageActions.loginRequest());
  });
}

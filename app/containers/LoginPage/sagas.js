import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as api from 'utils/request';

import {
  LOGIN_REQUEST,
  SUBMIT_LOGIN_ACTION,
} from './constants';

import {
  makeSelectFormLoginValues,
} from './selectors';

import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './actions';

// Sagas
export function* handleLoginRequest() {
  const json = yield select(makeSelectFormLoginValues());

  try {
    const result = yield call(api.POST, '/login', undefined, json);
    yield put(loginSuccess(result));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

// Watcher
/* eslint-disable func-names */
export default function* watcher() {
  yield takeEvery(LOGIN_REQUEST, handleLoginRequest);

  yield takeEvery(SUBMIT_LOGIN_ACTION, function* () {
    yield put(loginRequest());
  });
}

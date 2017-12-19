import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from 'containers/App/constants';
import { loginSuccess, loginError } from 'containers/App/actions';

import { apiPOST } from 'utils/request';

export function* loginRequest() {
  const json = yield select((store) => store.get('global').get('credential'));

  try {
    const result = yield call(apiPOST, '/login', undefined, json);
    yield put(loginSuccess(result));
  } catch (err) {
    yield put(loginError(err));
  }
}

export default function* login() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}

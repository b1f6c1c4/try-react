import { call, put, select, takeEvery } from 'redux-saga/effects';
import { apiPOST } from 'utils/request';

import {
  EXTERNAL_REQUEST,
} from './constants';
import {
  makeSelectFormData,
} from './selectors';
import {
  externalSuccess,
  externalFailure,
} from './actions';

// Sagas
export function* externalRequest() {
  const json = yield select(makeSelectFormData());

  try {
    const result = yield call(apiPOST, '/external', undefined, json);
    yield put(externalSuccess(result));
  } catch (err) {
    yield put(externalFailure(err));
  }
}

// Watcher
export default /* istanbul ignore next */ function* watcher() {
  /* istanbul ignore next */
  yield takeEvery(EXTERNAL_REQUEST, externalRequest);
}

import { call, put, select, takeLatest } from 'redux-saga/effects';
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

export function* externalRequest() {
  const json = yield select(makeSelectFormData());

  try {
    const result = yield call(apiPOST, '/external', undefined, json);
    yield put(externalSuccess(result));
  } catch (err) {
    yield put(externalFailure(err));
  }
}

export default function* external() {
  yield takeLatest(EXTERNAL_REQUEST, externalRequest);
}

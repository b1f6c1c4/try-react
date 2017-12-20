import { put, takeLatest } from 'redux-saga/effects';

import {
  EXTERNAL_REQUEST,
} from '../constants';
import {
  externalSuccess,
  externalFailure,
} from '../actions';

import external, { externalRequest } from '../saga';

const data = 'the-data';

/* eslint-disable redux-saga/yield-effects */
describe('externalRequest Saga', () => {
  let externalRequestGenerator;

  beforeEach(() => {
    externalRequestGenerator = externalRequest();

    const selectDescriptor = externalRequestGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = externalRequestGenerator.next(data).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the externalSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'First',
    }, {
      name: 'Second',
    }];
    const putDescriptor = externalRequestGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(externalSuccess(response)));
  });

  it('should call the externalFailure action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = externalRequestGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(externalFailure(response)));
  });
});

describe('external Saga', () => {
  const saga = external();

  it('should start task to watch for EXTERNAL_REQUEST action', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(EXTERNAL_REQUEST, externalRequest));
  });
});


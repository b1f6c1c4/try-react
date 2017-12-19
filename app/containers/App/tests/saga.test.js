import { put, takeLatest } from 'redux-saga/effects';

import { LOGIN_REQUEST } from 'containers/App/constants';
import { loginSuccess, loginError } from 'containers/App/actions';

import login, { loginRequest } from '../saga';

const credential = 'the-credential';

/* eslint-disable redux-saga/yield-effects */
describe('loginRequest Saga', () => {
  let loginRequestGenerator;

  beforeEach(() => {
    loginRequestGenerator = loginRequest();

    const selectDescriptor = loginRequestGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = loginRequestGenerator.next(credential).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loginSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'First',
    }, {
      name: 'Second',
    }];
    const putDescriptor = loginRequestGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loginSuccess(response)));
  });

  it('should call the loginError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = loginRequestGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loginError(response)));
  });
});

describe('login Saga', () => {
  const saga = login();

  it('should start task to watch for LOGIN_REQUEST action', () => {
    const takeLatestDescriptor = saga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOGIN_REQUEST, loginRequest));
  });
});

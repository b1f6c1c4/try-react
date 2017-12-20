import { put } from 'redux-saga/effects';

import {
  loginSuccess,
  loginFailure,
} from '../actions';

import {
  handleLoginRequest,
} from '../sagas';

const credential = 'the-credential';

// Sagas
/* eslint-disable redux-saga/yield-effects */
describe('handleLoginRequest Saga', () => {
  let loginRequestGenerator;

  beforeEach(() => {
    loginRequestGenerator = handleLoginRequest();

    const selectDescriptor = loginRequestGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = loginRequestGenerator.next(credential).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loginSuccess action if it requests the credential successfully', () => {
    const response = [{
      name: 'First',
    }, {
      name: 'Second',
    }];
    const putDescriptor = loginRequestGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loginSuccess(response)));
  });

  it('should call the loginFailure action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = loginRequestGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loginFailure(response)));
  });
});

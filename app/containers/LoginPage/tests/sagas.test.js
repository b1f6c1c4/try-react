import { put } from 'redux-saga/effects';

import * as loginPageActions from '../actions';

import {
  handleLoginRequest,
} from '../sagas';

const credential = 'the-credential';

// Sagas
/* eslint-disable redux-saga/yield-effects */
describe('handleLoginRequest Saga', () => {
  let generator;

  beforeEach(() => {
    generator = handleLoginRequest();

    const selectDescriptor = generator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = generator.next(credential).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loginPageActions.loginSuccess action if it requests the credential successfully', () => {
    const response = [{
      name: 'First',
    }, {
      name: 'Second',
    }];
    const putDescriptor = generator.next(response).value;
    expect(putDescriptor).toEqual(put(loginPageActions.loginSuccess(response)));
  });

  it('should call the loginPageActions.loginFailure action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = generator.throw(response).value;
    expect(putDescriptor).toEqual(put(loginPageActions.loginFailure(response)));
  });
});

/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
import browserLocale from 'browser-locale';

import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../App/constants';

function getLocale() {
  let locale = browserLocale();
  if (locale) {
    locale = locale.split('-')[0];
  } else {
    locale = DEFAULT_LOCALE;
  }
  return locale;
}

function languageProviderReducer(state = fromJS({ locale: getLocale() }), action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;

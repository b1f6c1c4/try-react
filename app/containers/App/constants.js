/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
import root from 'window-or-global';

export const DEFAULT_LOCALE = 'zh'; // When can't find browser locale
export const ROOT_LOCALE = 'en'; // Fallback when there is no translation

export const TOGGLE_DRAWER = 'App/TOGGLE_DRAWER';

export const apiUrl = (raw, host) => {
  if (!raw) {
    return '/api';
  }
  if (host.includes('try-react-staging')) {
    return raw.replace('try-react', 'try-react-staging');
  }
  return raw;
};

export const makeApi = (api) => apiUrl(process.env.API_URL, root.location.hostname) + api;


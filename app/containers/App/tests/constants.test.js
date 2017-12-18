import { apiUrl } from '../constants';

describe('apiUrl', () => {
  it('should return default', () => {
    expect(apiUrl(undefined, undefined)).toBe('/api');
  });
  it('should return non-staging', () => {
    expect(apiUrl('https://b1f6c1c4-try-react.herokuapp.com/api', 'b1f6c1c4-try-react.netlify.com')).toBe('https://b1f6c1c4-try-react.herokuapp.com/api');
  });
  it('should return default', () => {
    expect(apiUrl('https://b1f6c1c4-try-react.herokuapp.com/api', 'b1f6c1c4-try-react-staging.netlify.com')).toBe('https://b1f6c1c4-try-react-staging.herokuapp.com/api');
  });
});

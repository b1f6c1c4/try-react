import { mapDispatchToProps } from '../index';

import {
  toggleDrawer,
  loginRequest,
} from '../actions';

describe('mapDispatchToProps', () => {
  describe('onDrawerToggle', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onDrawerToggle).toBeDefined();
    });

    it('should dispatch toggleDrawer when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onDrawerToggle();
      expect(dispatch).toHaveBeenCalledWith(toggleDrawer());
    });
  });

  describe('onLoginRequest', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onLoginRequest).toBeDefined();
    });

    it('should dispatch loginRequest when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onLoginRequest();
      expect(dispatch).toHaveBeenCalledWith(loginRequest());
    });
  });
});

import React from 'react';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';

import App, { mapDispatchToProps } from '../index';
import { toggleDrawer } from '../actions';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render some routes', () => {
    const reducer = (s) => s;
    const store = createStore(reducer, fromJS({
      global: {
        drawerOpen: false,
      },
    }));
    const renderedComponent = shallow(
      <App store={store} />
    ).dive().dive();
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
});

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
});

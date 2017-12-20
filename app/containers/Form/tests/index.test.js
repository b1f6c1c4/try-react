import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { styledForm as Form, mapDispatchToProps } from '../index';

import {
  defaultAction,
} from '../actions';

Enzyme.configure({ adapter: new Adapter() });

describe('<Form />', () => {
  it('should render', () => {
    const renderedComponent = shallow(
      <Form
        data="value"
        onDefaultAction={jest.fn()}
      />
    ).dive();
    expect(renderedComponent).toBeDefined();
  });
});

describe('mapDispatchToProps', () => {
  describe('onDefaultAction', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onDefaultAction).toBeDefined();
    });

    it('should dispatch defaultAction when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onDefaultAction();
      expect(dispatch).toHaveBeenCalledWith(defaultAction());
    });
  });
});

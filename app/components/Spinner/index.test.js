import React from 'react';
import Spinner from '../Spinner';

describe('<Spinner />', () => {
  it('should render an <div> tag', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should render a SVG', () => {
    const wrapper = render(<Spinner />);
    expect(wrapper.find('svg').length).toBe(1);
  });

  it('should render 2 pathes inside <svg> tag', () => {
    const wrapper = render(<Spinner />);
    expect(wrapper.find('svg').find('path').length).toBe(2);
  });
});

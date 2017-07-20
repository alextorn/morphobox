import React from 'react';
import ErrorBox from '../ErrorBox';

describe('<ErrorBox />', () => {
  const minProps = {
    error: {}
  };

  let wrapper = shallow(<ErrorBox {...minProps} />);

  it('should render an <div> tag', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it('should render an <h1> tag', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should render an <pre> tag with a message', () => {
    const message = { message: 'Error' };
    wrapper = shallow(<ErrorBox {...minProps} error={message} />);

    expect(wrapper.find('pre').text()).toBe('Error');
  });
});

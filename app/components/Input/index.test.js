import React from 'react';
import Input from '../Input';

describe('<Input />', () => {
  const minProps = {
    value: '',
    onChange: () => {},
    onKeyPress: () => {}
  };
  const wrapper = shallow(<Input {...minProps} />);

  it('should render an <input> tag', () => {
    expect(wrapper.type()).toEqual('input');
  });
});

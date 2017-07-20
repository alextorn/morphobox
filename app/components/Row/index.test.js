import React from 'react';
import Row from '../Row';

describe('<Row />', () => {
  const minProps = {
    id: '',
    addRow: () => {}
  };

  let wrapper = shallow(<Row {...minProps} />);

  it('should render an <div> tag', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should not adopt a type attribute', () => {
    const type = 'submit';
    wrapper = shallow(<Row {...minProps} type={type} />);
    expect(wrapper.prop('type')).toBeUndefined();
  });

  it('should render a button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render disabled button at first', () => {
    const button = wrapper.find('button');
    expect(button.prop('disabled')).toEqual(true);
  });

  it('makes button visible after text being typed into input', () => {
    wrapper = mount(<Row {...minProps} />);
    const button = wrapper.find('button');
    const input = wrapper.find('Input');
    input.simulate('change', { target: { value: 'a' } });
    expect(button.prop('disabled')).toEqual(false);
  });

  it('should render an input', () => {
    expect(wrapper.find('Input').length).toBe(1);
  });
});

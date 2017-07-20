import React from 'react';
import Line from '../Line';

describe('<Line />', () => {
  const minProps = {
    text: 'Text',
    rowId: '',
    colId: '',
    delRow: () => {}
  };
  const children = minProps.text;

  const wrapper = shallow(<Line {...minProps} />);

  it('should render an <div> tag', () => {
    expect(wrapper.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should have children', () => {
    expect(wrapper.contains(children)).toEqual(true);
  });

  it('should render a Button component inside', () => {
    expect(wrapper.find('Button').length).toBe(1);
  });
});

import React from 'react';
import Button from '../Button';

describe('<Button />', () => {
  const minProps = {
    title: 'Title',
    onClick: () => {}
  };

  let wrapper = shallow(<Button {...minProps} />);

  it('should render an <button> tag', () => {
    expect(wrapper.type()).toEqual('button');
  });

  it('should have a title', () => {
    expect(wrapper.prop('title')).toBeDefined();
  });

  it('should have a className attribute', () => {
    expect(wrapper.prop('className')).toBeDefined();
  });

  it('should not adopt a type attribute', () => {
    const type = 'submit';
    wrapper = shallow(<Button {...minProps} type={type} />);
    expect(wrapper.prop('type')).toBeUndefined();
  });

  it('should render a SVG', () => {
    expect(wrapper.find('svg').length).toBe(1);
  });

  it('should render 2 lines inside <svg> tag', () => {
    const svg = wrapper.find('svg');
    expect(svg.find('line').length).toBe(2);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    wrapper = shallow(<Button {...minProps} onClick={onClickSpy} />);
    wrapper.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});

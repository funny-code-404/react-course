import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Todo from '..';

configure({ adapter: new Adapter() });

describe('<Todo /> mounting behaviour', () => {
  const mockFn = jest.fn();

  const props = {
    onClick: mockFn,
    completed: false,
    text: 'Some text...',
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todo {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 1 <Todo /> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should correctly render children', () => {
    // console.log(wrapper.props());
    expect(wrapper.props().children).toEqual(props.text);
  });

  it('set props correctly', () => {
    const newText = 'Hello!';
    wrapper.setProps({ text: newText });
    expect(wrapper.props().children).toEqual(newText);
  });

  it('should call onClick handler when clicked', () => {
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('<Todo /> styling behaviour', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Todo onClick={mockFn} completed={false} text='Some text...' />
    );
  });

  it('should not path linethrow style, when todo is incomplete', () => {
    expect(wrapper.props().style).toEqual({ textDecoration: 'none' });
  });

  it('should path linethrow style, when todo is complete', () => {
    wrapper.setProps({ completed: true });

    expect(wrapper.props().style).toEqual({ textDecoration: 'line-through' });
  });
});

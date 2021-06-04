import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import Link from '../'

configure({ adapter: new Adapter() })

describe('<Link /> mounting behaviour', () => {
  const mockFn = jest.fn()

  const props = {
    onClick: mockFn,
    active: false,
    children: <p>Click me</p>,
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Link {...props} />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <Link /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should correctly render children', () => {
    expect(wrapper.props().children).toEqual(props.children)
  })

  it('set props children correctly', () => {
    const newChildren = <p>New</p>
    wrapper.setProps({ children: newChildren })
    expect(wrapper.props().children).toEqual(newChildren)
  })

  it('should call onClick handler when clicked', () => {
    wrapper.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

describe('<Link /> styling behaviour', () => {
  let wrapper
  const mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Link onClick={mockFn} active={false} children={<p>Click me</p>} />)
  })

  it('should style correctly sets', () => {
    expect(wrapper.props().style).toEqual({ marginLeft: '4px' })
  })
})

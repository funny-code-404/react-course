import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import Footer from '..'

configure({ adapter: new Adapter() })

describe('<Footer /> mounting behaviour', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <Footer /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should correctly count FilterLink', () => {
    expect(wrapper.find('Connect(Link)')).toHaveLength(3)
  })

  it('should correctly render span children', () => {
    expect(wrapper.containsMatchingElement(<span>Show: </span>)).toEqual(true)
  })

  it('should correctly count span', () => {
    expect(wrapper.find('span')).toHaveLength(1)
  })
})

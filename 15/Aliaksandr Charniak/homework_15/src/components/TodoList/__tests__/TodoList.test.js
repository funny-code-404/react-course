import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import TodoList from '..'
import Todo from '../../Todo'

configure({ adapter: new Adapter() })

describe('<TodoList /> mounting behaviour', () => {
  const mockFn = jest.fn()

  const props = {
    toggleTodo: mockFn,
    todos: [{ id: 0, completed: false, text: 'Some text...' }],
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TodoList {...props} />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <TodoList /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should correctly render children', () => {
    expect(wrapper.containsMatchingElement(<Todo />)).toEqual(true)
  })

  it('should correctly count children', () => {
    expect(wrapper.find('Todo')).toHaveLength(1)
  })
})

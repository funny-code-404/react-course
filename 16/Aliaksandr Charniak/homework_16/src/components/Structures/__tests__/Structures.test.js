import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import configureMockStore from 'redux-mock-store'

import { Provider } from 'react-redux'

import Structures from '..'

configure({ adapter: new Adapter() })

const mockStore = configureMockStore()
const store = mockStore({})

describe('<Structures /> mounting behaviour', () => {
  const props = {
    data: {
      structures: [
        {
          id: 1,
          name: 'Barracks',
          expansion: 'Age of Kings',
          age: 'Dark',
          cost: {
            Wood: 175,
          },
          build_time: 50,
          hit_points: 1200,
          line_of_sight: 5,
          armor: '0/7',
          special: ['Garrison: 10 created units'],
        },
        {
          id: 2,
          name: 'Dock',
          expansion: 'Age of Kings',
          age: 'Dark',
          cost: {
            Wood: 150,
          },
          build_time: 35,
          hit_points: 1800,
          line_of_sight: 5,
          armor: '0/7',
          special: ['Garrison: 10 created units'],
        },
      ],
      units: 'https://age-of-empires-2-api.herokuapp.com/api/v1/units',
      technologies: 'https://age-of-empires-2-api.herokuapp.com/api/v1/technologies',
      civilizations: 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',
    },
    location: false,
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Structures {...props} />
      </Provider>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <Structures /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})

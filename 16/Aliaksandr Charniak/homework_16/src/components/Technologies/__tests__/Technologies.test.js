import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import configureMockStore from 'redux-mock-store'

import { Provider } from 'react-redux'

import Technologies from '..'

configure({ adapter: new Adapter() })

const mockStore = configureMockStore()
const store = mockStore({})

describe('<Technologies /> mounting behaviour', () => {
  const props = {
    data: {
      technologies: [
        {
          id: 1,
          name: 'Crossbowman',
          description: 'Upgrade to Crossbowman',
          expansion: 'Age of Kings',
          age: 'Castle',
          develops_in: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range',
          cost: {
            Food: 125,
            Gold: 75,
          },
          build_time: 35,
          applies_to: ['https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer'],
        },
        {
          id: 2,
          name: 'Thumb Ring',
          description: 'Faster reload time (10-20%) and 100% accuracy',
          expansion: 'Age of Kings',
          age: 'Castle',
          develops_in: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range',
          cost: {
            Food: 300,
            Wood: 250,
          },
          build_time: 45,
          applies_to: [
            'https://age-of-empires-2-api.herokuapp.com/api/v1/unit/archer',
            'https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cavalry_archer',
          ],
        },
      ],
      units: 'https://age-of-empires-2-api.herokuapp.com/api/v1/units',
      structures: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structures',
      civilizations: 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',
    },
    location: false,
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Technologies {...props} />
      </Provider>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <Technologies /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})

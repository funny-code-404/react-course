import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import configureMockStore from 'redux-mock-store'

import { Provider } from 'react-redux'

import Units from '..'

configure({ adapter: new Adapter() })

const mockStore = configureMockStore()
const store = mockStore({})

describe('<Units /> mounting behaviour', () => {
  const props = {
    data: {
      units: [
        {
          id: 1,
          name: 'Archer',
          description: 'Quick and light. Weak at close range; excels at battle from distance',
          expansion: 'Age of Kings',
          age: 'Feudal',
          created_in: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range',
          cost: {
            Wood: 25,
            Gold: 45,
          },
          build_time: 35,
          reload_time: 2.0,
          attack_delay: 0.35,
          movement_rate: 0.96,
          line_of_sight: 6,
          hit_points: 4,
          range: 30,
          attack: 4,
          armor: '0/0',
          accuracy: '80%',
        },
        {
          id: 2,
          name: 'Crossbowman',
          description: 'Upgraded archer',
          expansion: 'Age of Kings',
          age: 'Castle',
          created_in: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structure/archery_range',
          cost: {
            Wood: 25,
            Gold: 45,
          },
          build_time: 27,
          reload_time: 2.0,
          attack_delay: 0.35,
          movement_rate: 0.96,
          line_of_sight: 7,
          hit_points: 35,
          range: 5,
          attack: 5,
          armor: '0/0',
          attack_bonus: ['+3 spearmen'],
          accuracy: '85%',
        },
      ],
      technologies: 'https://age-of-empires-2-api.herokuapp.com/api/v1/technologies',
      structures: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structures',
      civilizations: 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations',
    },
    location: false,
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Units {...props} />
      </Provider>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <Units /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})

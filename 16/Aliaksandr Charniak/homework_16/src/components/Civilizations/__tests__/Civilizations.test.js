import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import configureMockStore from 'redux-mock-store'

import { Provider } from 'react-redux'

import Civilizations from '..'

configure({ adapter: new Adapter() })

const mockStore = configureMockStore()
const store = mockStore({})

describe('<Civilizations /> mounting behaviour', () => {
  const props = {
    data: {
      civilizations: [
        {
          id: 1,
          name: 'Aztecs',
          expansion: 'The Conquerors',
          army_type: 'Infantry and Monk',
          unique_unit: ['https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior'],
          unique_tech: [
            'https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars',
          ],
          team_bonus: 'Relics generate +33% gold',
          civilization_bonus: [
            'Villagers carry +5',
            'Military units created 15% faster',
            '+5 Monk hit points for each Monastery technology',
            'Loom free',
          ],
        },
        {
          id: 2,
          name: 'Britons',
          expansion: 'Age of Kings',
          army_type: 'Foot Archer',
          unique_unit: ['https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longbowman'],
          unique_tech: ['https://age-of-empires-2-api.herokuapp.com/api/v1/technology/yeomen'],
          team_bonus: 'Archery Ranges work 20% faster',
          civilization_bonus: [
            'Town Centers cost -50% wood upon reaching the Castle Age',
            'Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)',
            'Shepherds work 25% faster',
          ],
        },
      ],
      units: 'https://age-of-empires-2-api.herokuapp.com/api/v1/units',
      structures: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structures',
      technologies: 'https://age-of-empires-2-api.herokuapp.com/api/v1/technologies',
    },
    location: false,
  }

  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Civilizations {...props} />
      </Provider>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <Civilizations /> component', () => {
    expect(wrapper).toHaveLength(1)
  })
})

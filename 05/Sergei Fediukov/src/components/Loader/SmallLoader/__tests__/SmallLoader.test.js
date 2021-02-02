import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import SmallLoader from '..'

configure({ adapter: new Adapter() });

describe('Should render correctly "Civilizations"', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SmallLoader />)
    })
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('component have children div with "small_loader" class', () => {
        expect(wrapper.find('.small_loader')).toHaveLength(1)
    })
    it('component have children img', () => {
        expect(wrapper.find('img')).toHaveLength(1)
    })
})
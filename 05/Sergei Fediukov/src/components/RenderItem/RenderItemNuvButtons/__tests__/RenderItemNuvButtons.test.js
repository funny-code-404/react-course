import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import RenderItemNavButtons from '..'

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RenderItemNavButtons />)
    })
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('component has children button "go_back"', () => {
        expect(wrapper.find('.go_back')).toHaveLength(1)
    })
    it('component has children button "redirect"', () => {
        expect(wrapper.find('.redirect')).toHaveLength(1)
    })
})

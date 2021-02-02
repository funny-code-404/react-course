import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import { MainNavigation } from '..'

configure({ adapter: new Adapter() });

describe('Should render correctly "MainNavigation"', () => {
    const mockFn = jest.fn();

    const props = {
        getDataAction: mockFn,
        title: 'test title',
        path: 'test path'

    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainNavigation {...props} />)
    })
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('component have children div with "menu_link" class', () => {
        expect(wrapper.find('.menu_link')).toHaveLength(1)
    })
    it('component have children "NavLink"', () => {
        expect(wrapper.find('NavLink')).toHaveLength(1)
    })
    it('"NavLink" should call onClick when clicking', () => {
        wrapper.find('NavLink').simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})
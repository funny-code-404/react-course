import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { paths } from '../../../config'
import { MainNavLink } from '..';
// import { }

configure({ adapter: new Adapter() });

describe('Should render correctly "MainNavLink"', () => {
    const mockFn = jest.fn();

    const props = {
        getCivilizationsAction: mockFn,
        getUnitsAction: mockFn,
        getStructuresAction: mockFn,
        getTechnologiesAction: mockFn,
        title: 'test title',
        path: '/civilizations'
    }
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<MainNavLink {...props} />)
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component have children div with "menu_link" class', () => {
        expect(wrapper.find('.menu_link')).toHaveLength(1);
    });
    it('component have children "NavLink"', () => {
        expect(wrapper.find('NavLink')).toHaveLength(1);
    });
    it('"NavLink" should call onClick when clicking', () => {
        wrapper.find('NavLink').simulate('click');
        expect(props.getCivilizationsAction).toHaveBeenCalledTimes(1);
    });
    describe('getUnitsAction', () => {
        it('"NavLink" should call getUnitsAction when clicking after changin props', () => {
            wrapper.setProps({
                path: '/units'
            })
            wrapper.find('NavLink').simulate('click');
            expect(props.getUnitsAction).toHaveBeenCalledTimes(1);
        });
    })
    describe('111', () => {
        it('"NavLink" should call getStructuresAction when clicking after changin props', () => {
            wrapper.setProps({
                path: '/structures'
            })
            wrapper.find('NavLink').simulate('click');
            expect(props.getStructuresAction).toHaveBeenCalledTimes(1);
        });
    })
    describe('111', () => {
        it('"NavLink" should call getTechnologiesAction when clicking after changin props', () => {
            wrapper.setProps({
                path: '/technologies'
            })
            wrapper.find('NavLink').simulate('click');
            expect(props.getTechnologiesAction).toHaveBeenCalledTimes(1);
        });
    })
})
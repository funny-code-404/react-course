import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import MainNavigation from '..';
import MainNavLink from '../../MainNavlink'

configure({ adapter: new Adapter() });

describe('Should render correctly "MainNavigation"', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainNavigation />);
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
    it('component have children component "MainNavLink"', () => {
        expect(wrapper.find(MainNavLink)).toHaveLength(4);
    });
});
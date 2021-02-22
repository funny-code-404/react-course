import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { App } from '..';
import MainNavigation from '../../../components/MainNavigation';

configure({ adapter: new Adapter() });

describe('Should render correctly "App"', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component have children div with "app" class', () => {
        expect(wrapper.find('.App')).toHaveLength(1);
    });

});
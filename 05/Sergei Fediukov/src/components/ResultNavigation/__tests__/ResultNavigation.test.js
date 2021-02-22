import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ResultNavigation from '..';
configure({ adapter: new Adapter() });

describe('Should render correctly "ResultNavigation"', () => {
    const mockFn = jest.fn();

    const props = {
        data: [
            {
                name: 'test name',
                id: 1
            },
            {
                name: 'test name',
                id: 2
            },
        ],
        title: 'test title',
        path: 'test path'

    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ResultNavigation {...props} />)
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component has children div with "menu_link" class', () => {
        expect(wrapper.find('.menu_link')).toHaveLength(1);
    });
});
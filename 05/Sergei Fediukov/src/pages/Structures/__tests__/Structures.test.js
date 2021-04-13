import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Structures } from '..';
import ResultNavigation from '../../../components/ResultNavigation';

configure({ adapter: new Adapter() });

describe('Should render correctly "Structures"', () => {
    const mockFn = jest.fn();

    const props = {
        structures: { data: 'test data' },
        location: { pathname: 'test pathname' },
        history: { push: mockFn }
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Structures {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component has 1 navigation button', () => {
        expect(wrapper.find('button').length).toBe(1);
    });
    it('navigation button should call onClick when clicking', () => {
        wrapper.find('button').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    it('component has children div with "second_nav" class', () => {
        expect(wrapper.find('.second_nav')).toHaveLength(1);
    });
    it('component has children component "ResultNavigation"', () => {
        expect(wrapper.find(ResultNavigation)).toHaveLength(1);
    });
});
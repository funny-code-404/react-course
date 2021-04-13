import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RenderItemUniqueTech from '..';

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {
    const mockFn = jest.fn();
    const props = {
        unique_tech: ['test tech'],
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RenderItemUniqueTech {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component has children button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
});
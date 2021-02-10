import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { UniqueUnit } from '..';
import RenderItem from '../../../components/RenderItem';

configure({ adapter: new Adapter() });

describe('Should render correctly "UniqueUnit"', () => {
    const mockFn = jest.fn();

    const props = {
        url: 'test url',
        uniqueUnit: { data: 'test data' },
        getUniqueUnitDetails: mockFn
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UniqueUnit {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('prop - function should be called in componentDidMount', () => {
        expect(props.getUniqueUnitDetails).toHaveBeenCalledTimes(1);
    });
    it('component has children component "RenderItem"', () => {
        expect(wrapper.find(RenderItem)).toHaveLength(1);
    });
});
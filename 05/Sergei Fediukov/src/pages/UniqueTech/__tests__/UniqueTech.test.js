import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { UniqueTech } from '..';
import RenderItem from '../../../components/RenderItem';

configure({ adapter: new Adapter() });

describe('Should render correctly "UniqueTech"', () => {
    const mockFn = jest.fn();

    const props = {
        url: 'test url',
        uniqueTech: { data: 'test data' },
        getUniqueTechDetails: mockFn
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UniqueTech {...props} />);
    })
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('prop - function should be called in componentDidMount', () => {
        expect(props.getUniqueTechDetails).toHaveBeenCalledTimes(1);
    });
    it('component has children component "ResultNavigation"', () => {
        expect(wrapper.find(RenderItem)).toHaveLength(1);
    });
});
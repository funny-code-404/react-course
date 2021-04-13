import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { UniqueCreatedIn } from '..';
import RenderItem from '../../../components/RenderItem';

configure({ adapter: new Adapter() });

describe('Should render correctly "Technologies"', () => {
    const mockFn = jest.fn();

    const props = {
        url: 'test url',
        uniqueCreatedIn: { data: '' },
        getUniqueCreatedInDetails: mockFn
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UniqueCreatedIn {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('prop - function should be called in componentDidMount', () => {
        expect(props.getUniqueCreatedInDetails).toHaveBeenCalledTimes(1);
    });
    it('component has children component "ResultNavigation"', () => {
        expect(wrapper.find(RenderItem)).toHaveLength(1);
    });
});
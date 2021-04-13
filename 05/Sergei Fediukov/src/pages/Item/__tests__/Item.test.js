import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Item } from '..';
import RenderItem from '../../../components/RenderItem';

configure({ adapter: new Adapter() });

describe('Should render correctly "Item"', () => {
    const mockFn = jest.fn();

    const props = {
        item: { data: '' },
        match: { params: { id: 1 } },
        getItemDetails: mockFn,
        history: { goBack: mockFn },
        civilizations: { data: 'test data' },
        location: { pathname: 'test pathname' },
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Item {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('prop - function should be called in componentDidMount', () => {
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    it('component has children component "RenderItem"', () => {
        expect(wrapper.find(RenderItem)).toHaveLength(1);
    });
});
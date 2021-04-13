import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RenderItemFeatures from '..';

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {
    const props = {
        features: [{ test: 'test' }],
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RenderItemFeatures {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
});
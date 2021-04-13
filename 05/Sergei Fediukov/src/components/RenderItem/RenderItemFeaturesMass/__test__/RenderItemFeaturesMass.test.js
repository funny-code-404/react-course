import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RenderItemFeaturesMass from '..';

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {
    const props = {
        features_mass: [{ test: ['test feature 1', 'test feature 2'] }],
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RenderItemFeaturesMass {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
});
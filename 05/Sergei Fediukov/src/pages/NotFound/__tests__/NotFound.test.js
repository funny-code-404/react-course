import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NotFound from '..'


configure({ adapter: new Adapter() });

describe('Should render correctly "NotFound"', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NotFound />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
});
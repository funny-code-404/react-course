import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Home from '..';


configure({ adapter: new Adapter() });

describe('Should render correctly "Home"', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
});
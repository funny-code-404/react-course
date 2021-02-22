import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RenderItemCost from '..';

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {

    const props = {
        cost: {
            Wood: 'some wood',
            Food: 'some stone',
            Gold: 'some gold',
            Stone: 'some stone',
            info: 'some info'
        }
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RenderItemCost {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    });
});
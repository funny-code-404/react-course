import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RenderItemUniqueUnit from '..';
import { UniqueUnit } from '../../../../pages';

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {
    const mockFn = jest.fn();
    const state = {
        unique_unit: {
            0: true,
            1: true
        }
    }
    const props = {
        unique_unit: ['test unit 1', 'test unit 2'],
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RenderItemUniqueUnit {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component has children div with "result_inner" class', () => {
        expect(wrapper.find('.result_inner')).toHaveLength(1);
    });
    describe('should buttons render correctly', () => {
        it('initial props', () => {
            expect(wrapper.find('button')).toHaveLength(2);
        });
        it('should buttons render correctly correct after props changing', () => {
            wrapper.setProps({
                unique_unit: []
            });
            expect(wrapper.find('button')).toHaveLength(0);
        });
    });
    describe('should component UniqueUnit appear correctly', () => {
        it('should change components`s state and props', () => {
            wrapper.setState(prevState => ({
                ...prevState,
                unique_unit: {
                    0: !prevState.unique_unit[0],
                    1: !prevState.unique_unit[0],
                }
            }))
            wrapper.setProps({
                unique_unit: []
            });
            expect(wrapper.find(UniqueUnit)).toHaveLength(0);
        });
    });
});
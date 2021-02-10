import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { RenderItem } from '..';
import RenderItemCost from '../RenderItemCost';
import LoaderSecondary from '../../Loader/LoaderSecondary';
import RenderItemFeatures from '../RenderItemFeatures';
import RenderItemCreatedIn from '../RenderItemCreatedIn';
import RenderItemNavButtons from '../RenderItemNuvButtons';
import RenderItemUniqueUnit from '../RenderItemUniqueUnit';
import RenderItemUniqueTech from '../RenderItemUniqueTech';
import RenderItemFeaturesMass from '../RenderItemFeaturesMass';

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {
    const mockFn = jest.fn();
    const props = {
        data: ''
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RenderItem {...props} />)
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component "LoaderSecondary" should render correctly', () => {
        expect(wrapper.find(LoaderSecondary)).toHaveLength(1);
    });
    describe('should components appear correctly', () => {
        it('should change components`s state', () => {
            wrapper.setState({
                flag: true,
            });
            wrapper.setProps({
                data: { name: 'test', army_type: 'test', expansion: 'test', team_bonus: 'test', civilization_bonus: 'test', unique_unit: 'test', unique_tech: 'test', description: '', age: 'test', created_in: 'test', cost: 'test', build_time: '', reload_time: 'test', attack_delay: 'test', movement_rate: 'test', line_of_sight: 'test', hit_points: 'test', range: 'test', attack: 'test', armor: 'test', accuracy: 'test', special: 'test', attack_bonus: '', search_radius: 'test' },
            });
            expect(wrapper.find(LoaderSecondary)).toHaveLength(0);
            expect(wrapper.find('.result')).toHaveLength(1);;
            expect(wrapper.find(RenderItemCost)).toHaveLength(1);
            expect(wrapper.find(RenderItemFeatures)).toHaveLength(1);
            expect(wrapper.find(RenderItemCreatedIn)).toHaveLength(1);
            expect(wrapper.find(RenderItemNavButtons)).toHaveLength(1);
            expect(wrapper.find(RenderItemUniqueUnit)).toHaveLength(1);
            expect(wrapper.find(RenderItemUniqueTech)).toHaveLength(1);
            expect(wrapper.find(RenderItemFeaturesMass)).toHaveLength(1);
        });
    });
});
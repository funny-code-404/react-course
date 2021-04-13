import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RenderItemCreatedIn from '..';
import { UniqueCreatedIn } from '../../../../pages';

configure({ adapter: new Adapter() });

describe('Should render correctly', () => {
    const mockFn = jest.fn();

    const props = {
        created_in: '',
    }
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RenderItemCreatedIn {...props} />);
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component has children button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it('should change state when clicking', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.setState(prevState => ({
            ...prevState,
            created_in: !prevState.created_in
        })));
    });
    describe('should component UniqueCreatedIn appear correctly', () => {
        it('should change components`s state', () => {
            wrapper.setState({
                created_in: true,
            });
            expect(wrapper.find(UniqueCreatedIn)).toHaveLength(1);
        });
    });
});
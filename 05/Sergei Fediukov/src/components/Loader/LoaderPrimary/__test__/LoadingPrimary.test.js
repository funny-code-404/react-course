import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { LoaderPrimary } from '..';
configure({ adapter: new Adapter() });

describe('Should render correctly "LoaderPrimary"', () => {
    const mockFn = jest.fn();

    const props = {
        civilizations: { isFetching: true },
        units: { isFetching: false },
        structures: { isFetching: false },
        technologies: { isFetching: false },
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoaderPrimary {...props} />)
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    describe('loader should appear correctly', () => {
        it('component`s state should change ', () => {
            wrapper.setProps({
                civilizations: { isFetching: false }
            });
            expect(wrapper.find('.loading')).toHaveLength(0);
            expect(wrapper.find('span')).toHaveLength(0);
            expect(wrapper.find('img')).toHaveLength(0);
        });
    });
});
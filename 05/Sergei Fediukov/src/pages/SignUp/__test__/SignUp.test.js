import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { SignUp } from '..';

configure({ adapter: new Adapter() });

describe('Should render correctly "SignUp"', () => {
    const mockFn = jest.fn();

    const props = {
        handleSignUp: mockFn,
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SignUp {...props} />)
    });
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('component have children form', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
    it('component have children "input"', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });
    it('component have children "Link"', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });
    it('form should call onSubmit when submit', () => {
        wrapper.find('form').simulate('submit');
        expect(props.handleSignUp).toHaveBeenCalledTimes(0);
    });
});
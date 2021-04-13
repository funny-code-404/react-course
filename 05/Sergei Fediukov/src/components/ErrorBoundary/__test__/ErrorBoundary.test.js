import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ErrorBoundary from '..';

configure({ adapter: new Adapter() });

describe('component ErrorBoundary should catch error correctly', () => {
    const wrapper = shallow(<ErrorBoundary><Something /></ErrorBoundary>);
    const error = new Error('test error!');
    const mockedText = 'Warning, you have got the error';

    function Something() {
        return null;
    }
    it('should not render the child component', () => {
        expect(wrapper.find('h1').exists()).toBeFalsy();
    });
    it('if error component should change state', () => {
        wrapper.find(Something).simulateError(error);
        expect(wrapper.state()).toHaveProperty('hasError', true);
    });
    it('component should render correct children ', () => {
        expect(wrapper.props().children).toEqual(mockedText);
    });
});

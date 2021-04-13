import { configure, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router';
import PrivateRoute from '..';

configure({ adapter: new Adapter() });
describe('redirect should work correct', () => {

    it('should redirect if user is not authenticated', () => {
        const Component = () => <div>Component</div>;
        const props = { path: '/civilizations', component: Component };

        const enzymeWrapper = mount(
            <MemoryRouter initialEntries={[props.path]}>
                <PrivateRoute authenticated={false} ownProps={props} />
            </MemoryRouter>,
        );
        const history = enzymeWrapper.find('Router').prop('history');
        expect(history.location.pathname).toBe('/login');
    });
});

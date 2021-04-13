import { configure, mount, ReactWrapper, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter, Route } from 'react-router';
import { Home, NotFound } from '../../../pages';
import { LogIn } from '../../../pages/LogIn'
import { App } from '../../App';
import { Routes } from '..';

configure({ adapter: new Adapter() });

// it('should redirect if user is not authenticated', () => {
//     // const Component = () => <div>Component</div>;
//     const props = { path: '/random' };

//     const enzymeWrapper = mount(
//         <MemoryRouter authenticated={true} initialEntries={[props.path]}>
//             <Routes />
//         </MemoryRouter>,
//     );
//     const history = enzymeWrapper.find('Router').prop('history');
//     expect(history.location.pathname).toBe('/civilizations');
// });
describe('routes using memory router', () => {
    it('should show No match component for route not defined', () => {
        const Component = mount(
            <MemoryRouter initialEntries={['/random']}>
                <Routes />
            </MemoryRouter>,
        )
        expect(Component.find(NotFound)).toHaveLength(1);
    })
})
describe('routes should work correctly', () => {

    it('should route to correct path', () => {
        const Component = () => <div>Component</div>;
        const props = { path: '/civilizations', component: Component };

        const enzymeWrapper = mount(
            <MemoryRouter initialEntries={[props.path]}>
                <Route ownProps={props} />
            </MemoryRouter>,
        );
        const history = enzymeWrapper.find('Router').prop('history');
        expect(history.location.pathname).toBe('/civilizations');
    });
})


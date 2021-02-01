import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { MemoryRouter } from 'react-router';
import { Home, NotFound } from '../../../pages'
import Routes from '..'

configure({ adapter: new Adapter() });

describe('Routes should work correctly', () => {

    it('invalid path should redirect to "NotFound"', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/random']}>
                <Routes />
            </MemoryRouter>);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(NotFound)).toHaveLength(1);
    })
    it('valid path should redirect to "NotFound"', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <Routes />
            </MemoryRouter>);
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(NotFound)).toHaveLength(0);
    })




})
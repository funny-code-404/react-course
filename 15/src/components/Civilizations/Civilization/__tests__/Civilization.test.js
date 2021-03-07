import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import Preloader from '../../../Preloader/Preloader';
import Civilization from '../Civilization';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      civilizationType: 'testName'
    }),
    useRouteMatch: () => ({ url: '/civilizations/testName' }),
}));

const mockStore = createMockStore([createSagaMiddleware()]);

describe('<Civilization /> unit test', () => {
    
    describe('when store doesn\'t contain civilizations', () => {
           
        const initialState = {
            ageOfEmpires: {
            fetchedData: { 
                civilizations: [],
                structures: [],
                technologies: [],
                units: [],
            },
            addData: [],
            isFetching: false,
            error: null 
            },
            paginations: {
                pageNumber: 1,
                offset: 0,
                pageLimit: 10
            }
        };
        
        const store = mockStore(initialState);
        const wrapper = mount(
            <Provider store={store}>
                <Civilization />
            </Provider>
        );

        it('should render Preloader', () => {
            expect(wrapper.find(Preloader)).toHaveLength(1);
        });

    });

    describe('when is Fetching', () => {
           
        const initialState = {
            ageOfEmpires: {
            fetchedData: { 
                civilizations: [{ 
                    id: 1, 
                    name: 'testName',
                    unique_unit: ['testUnique']
                }],
                structures: [],
                technologies: [],
                units: [],
            },
            addData: [],
            isFetching: true,
            error: null 
            },
            paginations: {
                pageNumber: 1,
                offset: 0,
                pageLimit: 10
            }
        };
        
        const store = mockStore(initialState);
        const wrapper = mount(
            <Provider store={store}>
                <Civilization />
            </Provider>
        );

        it('should render Preloader', () => {
            expect(wrapper.find(Preloader)).toHaveLength(1);
        });

    });

    describe('when store contains civilization info', () => {
        const initialState = {
            ageOfEmpires: {
            fetchedData: { 
                civilizations: [{
                    id: 1,
                    name: 'testName',
                    unique_unit: ['testUnique']
                }],
                structures: [],
                technologies: [],
                units: [],
            },
            addData: [],
            isFetching: false,
            error: null
            },
            paginations: {
                pageNumber: 1,
                offset: 0,
                pageLimit: 10
            }
        };
        
        const store = mockStore(initialState);
        const wrapper = mount(
            <Provider store={store}>
                <Civilization />
            </Provider>
        );

        it('should render civilization info', () => {
            expect(wrapper.find('h1').text()).toBe('testName');
        });

    });
    
    describe('when store contains error', () => {
           
        const initialState = {
            ageOfEmpires: {
            fetchedData: { 
                civilizations: [],
                structures: [],
                technologies: [],
                units: [],
            },
            addData: [],
            isFetching: true,
            error: { message: 'dangerousError' }
            },
            paginations: {
                pageNumber: 1,
                offset: 0,
                pageLimit: 10
            }
        };
        
        const store = mockStore(initialState);
        const wrapper = mount(
            <Provider store={store}>
                <Civilization />
            </Provider>
        );

        it('should render error message', () => {
            expect(wrapper.find('h2').text()).toBe('dangerousError');
        });

    });
});
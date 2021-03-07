import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router } from 'react-router-dom';

import Preloader from '../../../Preloader/Preloader';
import Unit from '../Unit';


configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      unitId: '1'
    }),
    useRouteMatch: () => ({ url: '/units/testName-1' }),
}));

const mockStore = createMockStore([createSagaMiddleware()]);

describe('<Unit /> unit test', () => {
    
    describe('when store doesn\'t contain unit', () => {
           
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
                <Unit />
            </Provider>
        );

        it('should render Preloader', () => {
            expect(wrapper.find(Preloader)).toHaveLength(1);
        });

    });

    describe('when store contains unit info and created_in in addData', () => {
        const initialState = {
            ageOfEmpires: {
            fetchedData: { 
                civilizations: [],
                structures: [],
                technologies: [],
                units: [{
                    id: 1,
                    name: 'testName',
                    age: 'testAge',
                    cost: { testCost: 100 }
                }],
            },
            addData: [{ id: 1, name:'testStructure' }],
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
            <Router>
                <Provider store={store}>
                    <Unit />
                </Provider>
            </Router>
        );

        it('should render unit info', () => {
            expect(wrapper.find('h1').text()).toBeDefined();
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
                <Unit />
            </Provider>
        );

        it('should render error message', () => {
            expect(wrapper.find('h2').text()).toBe('dangerousError');
        });

    });
});
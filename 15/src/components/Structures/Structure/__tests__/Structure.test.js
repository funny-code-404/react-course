import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import Preloader from '../../../Preloader/Preloader';
import Structure from '../Structure';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      structureId: '1'
    }),
    useRouteMatch: () => ({ url: '/structures/testName-1' }),
}));

const mockStore = createMockStore([createSagaMiddleware()]);

describe('<Structure /> unit test', () => {
    
    describe('when store doesn\'t contain structures', () => {
           
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
                <Structure />
            </Provider>
        );

        it('should render Preloader', () => {
            expect(wrapper.find(Preloader)).toHaveLength(1);
        });

    });

    describe('when store contain structure info', () => {
        const initialState = {
            ageOfEmpires: {
            fetchedData: { 
                civilizations: [],
                structures: [{
                    id: 1,
                    name: 'testName',
                    age: 'testAge',
                    cost: { testCost: 100 }
                }],
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
                <Structure />
            </Provider>
        );

        it('should render structure info', () => {
            expect(wrapper.find('h1').text()).toBeDefined();
        });

    });
    
    describe('when store contain error', () => {
           
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
                <Structure />
            </Provider>
        );

        it('should render error message', () => {
            expect(wrapper.find('h2').text()).toBe('dangerousError');
        });

    });
});
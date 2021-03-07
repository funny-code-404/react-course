import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import createMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import Paginations from '../Paginations';

configure({ adapter: new Adapter() });

const mockStore = createMockStore([createSagaMiddleware()]);

describe('<Paginations/> unit test', () => {
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
    const mockedTotalItemsCount = 20;
    const wrapper = mount(
        <Provider store={store}>
            <Paginations totalItemsCount={mockedTotalItemsCount}/>
        </Provider>
    );

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
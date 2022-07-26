import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import HotelCard from '../HotelCard';
import HotelsElem from '../HotelsElem';

configure({
    adapter: new Adapter()
});

describe('HOTELS_COMPONENTS', () => {
    let shallowWrapper: ShallowWrapper;
    const mockFunction = jest.fn();

    describe('<HotelCard /> component', () => {
        const props = {
            hotel: {
                id: '1',
                imageUrl: '2',
                name: '3',
                city: '4',
                country: '5',
            },
            onClick: mockFunction,
        };

        beforeEach(() => {
            shallowWrapper = shallow(<Provider store={store}><HotelCard {...props} /></Provider>);
        });

        it('should match snapshot', () => {
            expect(shallowWrapper).toMatchSnapshot()
        });

        it('should has correct children', () => {
            expect(shallowWrapper.dive().props()).toEqual(props);
        });

        it('should call onClick handler when clicks on the element', () => {
            const eventObj = {
              target: {
                id: 'testId',
              },
            };
        
            shallowWrapper.dive().simulate('click', eventObj);
        
            expect(mockFunction).toHaveBeenCalledTimes(1);
            expect(mockFunction).toHaveBeenCalledWith(eventObj);
        });
    });
})
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Home from '../Home';

configure({ adapter: new Adapter() });

describe('<Home/> unit test', () => {
    const wrapper = shallow(<Home/>);

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
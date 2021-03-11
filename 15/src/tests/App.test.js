import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from '../App';

configure({ adapter: new Adapter() });

describe('<Home/> unit test', () => {
    const wrapper = shallow(<App/>);

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
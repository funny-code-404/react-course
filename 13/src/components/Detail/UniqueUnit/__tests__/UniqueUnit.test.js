import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DetailUniqueUnit from "..";

configure({ adapter: new Adapter() });

describe('DETAIL UNIQUE UNIT', () => {
    const initialState = {
        unique_unit: false,
    }

    const props = {
        data: [
            '/path/1',
        ]
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<DetailUniqueUnit {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('initialize CreatedIn with initial state', () => {
        expect(wrapper.state()).toEqual(initialState)
    });
    it('Component is return 1 button content', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it('Component should render correct data content', () => {
        const mock_data = '1'
        expect(wrapper.find('button').props().children).toEqual(mock_data);
    });
    it('Component should render correct after props changing', () => {
        const newdata = '/path/2';
        const mock_result = '2'
        wrapper.setProps({ data: [ newdata ]})
        expect(wrapper.find('button').props().children).toEqual(mock_result);
    });

    it('should return on click true',() => {
        const mock_result = true
        wrapper.find('button').simulate('click')
        expect(wrapper.state().unique_unit).toEqual(mock_result)
    });

    it('Component should render correct after changing', () => {
        const mock_result =  true;
        const mock_text = 'close';

        wrapper.setState({ unique_unit: mock_result})
        expect(wrapper.find('button').text()).toEqual(mock_text);
    });
});

// npm run test src/components/Detail/UniqueUnit
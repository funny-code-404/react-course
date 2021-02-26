import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { MainNavigation } from "..";

configure({ adapter: new Adapter() });

describe('MAIN NAVIGATION', () => {
    const mockFn = jest.fn();

    const props = {
        getDataAction: mockFn,
        title: 'title',
        path: '/path'
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainNavigation {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('Component is defined', () => {
        expect(wrapper).toHaveLength(1)
    });
    it('Component should return correct action',() => {
        expect(wrapper.find('li')).toHaveLength(1)
    });
    it(' should call onClick when clicking link',() => {
        wrapper.find('Link').simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
    });
});

// npm run test src/components/MainNavigation
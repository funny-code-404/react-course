import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ErrorBoundary from "..";

configure({ adapter: new Adapter() });

describe('ERROR BOUNDARY', () => {
   const wrapper = shallow(<ErrorBoundary><Something /></ErrorBoundary>);
    const error = new Error('test');

    function Something() {
        return null;
    }
    it('should not render the child component', () => {
        expect(wrapper.find('h1').exists()).toBeFalsy()
    })
    it('error component should change state', () => {
        wrapper.find(Something).simulateError(error);
        expect(wrapper.state()).toHaveProperty('error', true);
    })
    it('component should render correct children ', () => {
        const mockedText = 'Warning, you got the error'
        expect(wrapper.find('h1').props().children).toEqual(mockedText);
    })
});

// npm run test src/components/ErrorBoundary
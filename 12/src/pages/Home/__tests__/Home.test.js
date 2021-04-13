import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Home  from "..";

configure({ adapter: new Adapter() });

describe('PAGES  HOME', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('Component is return 1 element', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});

// npm run test src/pages/Home
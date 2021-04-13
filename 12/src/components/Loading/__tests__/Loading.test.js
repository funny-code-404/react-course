import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Loading } from "..";

configure({ adapter: new Adapter() });

describe('MAIN LOADING', () => {

    const props = {
        civilizations: { isFetching: false },
        units: { isFetching: false },
        structures: { isFetching: false },
        technologies: { isFetching: false },
        item: { isFetching: false },
        createdIn: { isFetching: false },
        uniqueTech: { isFetching: false },
        uniqueUnit: { isFetching: false },
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Loading {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('Component is defined', () => {
        expect(wrapper).toHaveLength(1)
    });
    it('component`s state should change', () => {
        wrapper.setProps({
            civilizations: { isFetching: true }
        })
        expect(wrapper.find('.loadin')).toHaveLength(1)
        expect(wrapper.find('.loader')).toHaveLength(1)
        expect(wrapper.find('.inner')).toHaveLength(3)
    })
});

// npm run test src/components/Loading
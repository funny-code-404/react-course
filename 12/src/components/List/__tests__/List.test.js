import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import List from "..";

configure({ adapter: new Adapter() });

describe('LIST', () => {
    const props = {
        data: [
            {
                id: 1,
                name: 'Some text...',
            },
        ], 
        title: 'Some Text title...', 
        path: '/path',
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<List {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Component is defined', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('Component should render correct title content', () => {
        expect(wrapper.find('h1').props().children).toEqual(props.title);
    });
    it('Component should render correct after props changing', () => {
        const newTitle = 'NEW';
        wrapper.setProps({ title: newTitle})
        expect(wrapper.find('h1').props().children).toEqual(newTitle);
    });
});
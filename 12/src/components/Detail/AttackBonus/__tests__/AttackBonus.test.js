import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import AttackBonus from "..";

configure({ adapter: new Adapter() });

describe('DETAIL ATTACK BONUS', () => {
    const props = {
        data: [
             'Some text...',
        ]
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AttackBonus {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Component is return 1 content', () => {
        expect(wrapper.find('li')).toHaveLength(1);
    });
    it('Component should render correct data content', () => {
        expect(wrapper.find('li').props().children).toEqual(props.data[0]);
    });
    it('Component should render correct after props changing', () => {
        const newdata = 'NEW';
        wrapper.setProps({ data: [ newdata, ]})
        expect(wrapper.find('li').props().children).toEqual(newdata);
    });
});

// npm run test src/components/Detail/AttackBonus
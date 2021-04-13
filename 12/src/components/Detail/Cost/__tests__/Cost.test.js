import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Cost from "..";

configure({ adapter: new Adapter() });

describe('DETAIL COST', () => {
    const props = {
        data: {
            Wood: 1,
        }
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Cost {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('Component is return 1 li content', () => {
        expect(wrapper.find('li')).toHaveLength(1);
    });
    it('Component is return 1 span content', () => {
        expect(wrapper.find('span')).toHaveLength(1);
    });
    it('Component should render correct data content', () => {
        expect(wrapper.find('span').props().children).toEqual(props.data.Wood);
    });
    it('Component should render correct after props changing', () => {
        const newdata = 'NEW';
        wrapper.setProps({ data: { Wood: newdata }})
        expect(wrapper.find('span').props().children).toEqual(newdata);
    });
});

// npm run test src/components/Detail/Cost
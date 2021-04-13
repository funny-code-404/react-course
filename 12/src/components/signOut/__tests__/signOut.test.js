import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { SignOut } from "..";

configure({ adapter: new Adapter() });

describe('PAGES  SIGN OUT', () => {
    const mockFn = jest.fn();

    const props = {
        singOut: mockFn,
        auth: { user: { name: 'text' }}
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SignOut {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
     it('function should be called', () => {
         wrapper.find('button').simulate('click')
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
});
// npm run test src/components/signOut
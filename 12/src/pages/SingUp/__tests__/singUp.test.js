import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { SingUp } from "..";

configure({ adapter: new Adapter() });

describe('PAGES  LOGIN', () => {
    const mockFn = jest.fn();

    const props = {
        getSignUp: mockFn,
        auth: { user: null}
    }

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SingUp {...props} />);
    });

    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
     it('function should be called', () => {
         wrapper.find('form').simulate('submit', { preventDefault () {},
            target: {
                elements: {
                    email: { value: 'blah' },
                    password: { value: 'some value' }
                }
            }
         })
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
});
// npm run test src/pages/SingUp
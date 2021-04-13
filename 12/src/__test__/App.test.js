import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from '../App'
import { MainNavigation } from '../components';

configure({ adapter: new Adapter() });

describe('APP', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('to Match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('component is defined', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('component have children div with "container" class', () => {
        expect(wrapper.find('.container')).toHaveLength(1)
    })
    it('component have children nav with "menu" class', () => {
        expect(wrapper.find('.menu')).toHaveLength(1)
    })
    it('component have children component "MainNavigation"', () => {
        expect(wrapper.find(MainNavigation)).toHaveLength(5)
    })
})
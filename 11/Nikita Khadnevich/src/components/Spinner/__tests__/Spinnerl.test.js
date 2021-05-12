import React from 'react';
import { Provider } from 'react-redux';
import SpinnerHome from '../../Spinner/index';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import { connect } from 'react-redux';
import configureMockStore from 'redux-mock-store' //ES6 modules

const newTimeout = 6000;
jest.setTimeout(newTimeout) 

describe('<Spinner>', () => {
   const mockStore = configureMockStore()// create Stor
   const initialState = {
      civil: {isFetching: true},
      units: {isFetching: true},
      structures: {isFetching: true},
      technologies: {isFetching: true},
   }// Init StorContain
   const store = mockStore(initialState) // Put contain into Stor

   it('Is Spinner render correctly', () => {
      const props = { title: 'Render correctly!'}
      const wrapper = mount(
         <Provider store={store} >
            <SpinnerHome {...props}/>
         </Provider>
      )
   expect(wrapper).toMatchSnapshot()
   expect(wrapper).toHaveLength(1)
   })

   it('should get-Function called', () => {
      const fetchingState = jest.fn();
      const wrapper = mount(
         <Provider store={store} >
            <SpinnerHome fetchingState={fetchingState()}/>
         </Provider>
      )
      expect(fetchingState).toBeCalled()
   })

   it('should to find P-element is String', () => {
      const props = {
         title: 'Truthy'
      }
      const wrapper = mount(
         <Provider store={store} >
            <SpinnerHome {...props} />
         </Provider>
      )
      expect(typeof (wrapper.find("p").text()) == 'string').toBe(true)
   })

   it('check is P-element', () => {
      const props = {
            title: "Waiting"
      }
      const wrapper = mount(
         <Provider store={store} >
            <SpinnerHome {...props}/>
         </Provider>
      )
      expect(wrapper.find("p").text()).toEqual('Waiting');
   })
})
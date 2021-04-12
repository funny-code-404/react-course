import React from 'react';
import { Provider } from 'react-redux';
import Civil from '../Civil';
import { Civildata } from '../selectors'
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import configureMockStore from 'redux-mock-store' //ES6 modules

jest.mock('../../../ducks/civil/selectors')
const mockFnDispatch = jest.fn();
const mockFnEffect = jest.fn();
const mockFnSelector = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: () => mockFnSelector(),
  useDispatch: () => mockFnDispatch,
  useEffect: () => mockFnEffect
}));


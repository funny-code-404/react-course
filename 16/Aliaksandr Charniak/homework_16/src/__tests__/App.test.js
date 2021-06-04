import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from '../App'

configure({ adapter: new Adapter() })

describe('App unit test', () => {
  const wrapper = shallow(<App />)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 1 <App /> component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should correctly count Router', () => {
    expect(wrapper.find('BrowserRouter')).toHaveLength(1)
  })

  it('should correctly count Switch', () => {
    expect(wrapper.find('Switch')).toHaveLength(1)
  })

  it('should correctly count Link', () => {
    expect(wrapper.find('Link')).toHaveLength(4)
  })

  it('should correctly count Route', () => {
    expect(wrapper.find('Route')).toHaveLength(10)
  })
})

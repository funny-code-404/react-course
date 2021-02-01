// import 'jsdom-global/register'
import { render, fireEvent } from '@testing-library/react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import App from '../../components/App'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { rootReducer } from '../../redux/rootReducer'
import initialState from '../../redux/initialState'
import { middlewares } from '../../redux/index'

const store = createStore(
    combineReducers({ ...rootReducer }),
    initialState,
    applyMiddleware(...middlewares)
)

describe('Connected component full app integration tests', () => {
    it('', () => {
        const { container, getByTestId, getByText } = render(

            <Provider store={store}>
                <Router>
                    <Switch>
                        <App />
                    </Switch>
                </Router>
            </Provider>
           ,
        );
        const Civilizations = getByText('Civilizations')

        fireEvent.click(Civilizations)

        const result = container.querySelector('button')

        expect(result.type).toEqual('submit')
    })
})
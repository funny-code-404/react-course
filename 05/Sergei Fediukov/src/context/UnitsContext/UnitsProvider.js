import React from 'react'
import context from './index'
import { helper } from '../../components/Helpers/contextHelper'
const { Provider, Consumer } = context

class UnitsProvider extends React.Component {
    state = {
        data: [{ start: 'init' }]
    }
    async dataFromHelper() {
        try {
            const data = await helper('https://age-of-empires-2-api.herokuapp.com/api/v1/units')
            this.setState({ data })
        }
        catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.dataFromHelper()
    }
    render() {
        const { data } = this.state;
        const { children } = this.props;
        return <Provider value={{ data }}>{children}</Provider>
    }
}
export { UnitsProvider, Consumer }
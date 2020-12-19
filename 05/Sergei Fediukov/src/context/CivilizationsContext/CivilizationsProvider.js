import React from 'react'
import context from './index'
import { helper } from '../../components/Helpers/contextHelper'
const { Provider, Consumer } = context

class CivilizationsProvider extends React.Component {
    state = {
        data: [{ start: 'init' }]
    }
    hendleDataChange = data => {
        this.setState(prevState => ({
            ...prevState,
            data
        }))
    }
    async dataFromHelper() {
        try {
            const data = await helper('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
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
        return <Provider value={{ data, hendleDataChange: this.hendleDataChange }}>{children}</Provider>
    }
}
export { CivilizationsProvider, Consumer }
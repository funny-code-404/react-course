
import React from 'react'
import context from './index'
const { Provider, Consumer } = context
const baseURL = 'https://cors-anywhere.herokuapp.com/'
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
    componentDidMount() {
        fetch(`${baseURL}https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`)
            .then((data) => data.json())
            .then(({ civilizations }) => this.setState({ data: civilizations }))
            .catch(e => {
                console.log(e)
                this.setState(prevState => ({
                    ...prevState,
                    error: e
                }))
            })
    }
    render() {
        const { data } = this.state;
        const { children } = this.props;
        return <Provider value={{ data, hendleDataChange: this.hendleDataChange }}>{children}</Provider>
    }
}
export { CivilizationsProvider, Consumer }
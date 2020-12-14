import React from 'react'
import IsLoading from '../components/IsLoading'
import { parsingData } from '../components'

const withUnique = (Component) => class extends React.Component {
    state = {
        data: {},
        isFetching: true,
        error: null
    }
    componentDidMount() {
        fetch(`${this.props.src}`)
            .then((res) => res.json())
            .then(parsingData)
            .then((data) => this.setState({
                data: data,
                isFetching: false
            }))
            .catch(e => {
                console.log(e)
                this.setState(prevState => ({
                    ...prevState,
                    error: e
                }))
            })

    }
    render() {
        const { data, isFetching, error } = this.state
        return (
            isFetching ?
                <IsLoading /> :
                error ?
                    <div>
                        {`Error: ${error.message}`}
                    </div> :
                    <Component details={data} />
        )
    }
}
export default withUnique
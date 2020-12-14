import React from 'react'
import { parsingData, IsLoading } from '../components'
const withSecondNav = (Component, url) => class extends React.Component {
    state = {
        data: {},
        isFetching: true,
        error: null
    }

    componentDidMount() {
        (+this.props.match.params.id) ?
            fetch(`${url}/${this.props.match.params.id}`)
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
            : this.props.history.goBack()
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
                    <Component details={data} history={this.props.history} />
        )
    }
}
export default withSecondNav
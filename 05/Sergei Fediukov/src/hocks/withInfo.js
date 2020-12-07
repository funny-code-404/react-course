import React from 'react'
import IsLoading from '../components/IsLoading'

const withInfo = (Component, url) => class extends React.Component {

    state = {
        data: {},
        isFetching: true,
        error: null
    }
    componentDidMount() {
        fetch(url)
            .then((res) => res.json())
            .then(({ [this.props.location.pathname.substr(1)]: res }) => res)
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
                    Boolean(data.length) &&
                    <Component
                        menu={data}
                        path={this.props.location.pathname}
                        history={this.props.history}
                    />
        )

    }
}
export default withInfo
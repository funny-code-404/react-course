import React from 'react'
import { helper } from '../components/Helpers/hocHelper'
import { IsLoading } from '../components'
const withSecondNav = (Component, url) => class extends React.Component {
    state = {
        data: {},
        isFetching: true,
        error: null
    }
    async dataFromHelper() {
        try {
            const data = await helper(`${url}/${this.props.match.params.id}`)
            this.setState({
                data,
                isFetching: false
            })
        }
        catch (e) {
            console.log(e)
            this.setState(prevState => ({
                ...prevState,
                error: e
            }))
        }
    }
    componentDidMount() {
        (+this.props.match.params.id) ?
            this.dataFromHelper()
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
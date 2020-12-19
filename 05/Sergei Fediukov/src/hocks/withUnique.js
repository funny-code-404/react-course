import React from 'react'
import { helper } from '../components/Helpers/hocHelper'
import IsLoading from '../components/IsLoading'

const withUnique = (Component) => class extends React.Component {
    state = {
        data: {},
        isFetching: true,
        error: null
    }
    async dataFromHelper() {
        try {
            const data = await helper(`${this.props.src}`)
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
        this.dataFromHelper()
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
import React from 'react'
import { connect } from 'react-redux'
import { getUniqueCreatedInDetails } from '../../redux/actions';
import RenderItem from '../../components/RenderItem'

export class UniqueCreatedIn extends React.Component {

    componentDidMount() {
        const path = this.props.url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/')
        this.props.getUniqueCreatedInDetails(path)

    }
    render() {
        const data = this.props.uniqueCreatedIn.data
        return (
            Boolean(data.length) ?
                <RenderItem
                    data={data[0]}
                    unique='true'
                /> :
                Boolean([data].length) ?
                    <RenderItem
                        data={data}
                        unique='true'
                    /> : ''
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getUniqueCreatedInDetails: path => dispatch(getUniqueCreatedInDetails(path)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UniqueCreatedIn) 

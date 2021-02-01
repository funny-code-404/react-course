import React from 'react'
import { connect } from 'react-redux'
import { getUniqueDetails } from '../../redux/actions';
import RenderItem from '../../components/RenderItem'

export class UniqueCreatedIn extends React.Component {

    componentDidMount() {
        const path = this.props.url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/')
        this.props.getUniqueCreatedInDetails(path)
    }
    render() {
        return (
            <div>
                <RenderItem
                    data={this.props.uniqueCreatedIn.data}
                    unique='true' />
            </div >
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getUniqueCreatedInDetails: path => dispatch(getUniqueDetails(path)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UniqueCreatedIn) 

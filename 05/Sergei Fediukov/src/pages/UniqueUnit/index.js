import React from 'react'
import { connect } from 'react-redux'
import { getUniqueUnitDetails } from '../../redux/actions';
import RenderItem from '../../components/RenderItem'

class UniqueUnit extends React.Component {

    componentDidMount() {
        const path = this.props.url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/')
        this.props.getUniqueUnitDetails(path)
    }
    render() {
        return (
            <div>
                <RenderItem data={this.props.uniqueUnit.data} unique='true' />
            </div >
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch, getState) => ({
    getUniqueUnitDetails: path => dispatch(getUniqueUnitDetails(path)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UniqueUnit) 

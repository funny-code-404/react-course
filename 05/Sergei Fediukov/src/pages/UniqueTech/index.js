import React from 'react'
import { connect } from 'react-redux'
import { getUniqueTechDetails } from '../../redux/actions';
import RenderItem from '../../components/RenderItem'

class UniqueTech extends React.Component {

    componentDidMount() {
        const path = this.props.url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/')
        this.props.getUniqueTechDetails(path)
    }
    render() {
        return (
            <div>
                <RenderItem data={this.props.uniqueTech.data} unique='true' />
            </div >
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getUniqueTechDetails: path => dispatch(getUniqueTechDetails(path)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UniqueTech) 

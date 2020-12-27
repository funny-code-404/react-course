import React from 'react'
import { connect } from 'react-redux';
import { paths } from '../../config';
import { getDetails } from '../../redux/actions';
import RenderItem from '../../components/RenderItem'

class ItemsInfo extends React.Component {

    componentDidMount() {
        let path = ''
        if (this.props.location) {
            if (this.props.location.pathname.includes(paths.civilizations)) {
                path = paths.civilization
            }
            if (this.props.location.pathname.includes(paths.units)) {
                path = paths.unit
            }
            if (this.props.location.pathname.includes(paths.structures)) {
                path = paths.structure
            }
            if (this.props.location.pathname.includes(paths.technologies)) {
                path = paths.technology
            }
        }
        (+this.props.match.params.id) ?
            this.props.getItemDetails(`${path}/${this.props.match.params.id}`)
            : this.props.history.goBack()
    }
    render() {
        // console.log(this.props)
        return (

            <RenderItem data={this.props.item.data} history={this.props.history} />
        )
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getItemDetails: path => dispatch(getDetails(path)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemsInfo)
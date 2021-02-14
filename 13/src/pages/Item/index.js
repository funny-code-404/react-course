import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getDetail } from "../../redux/action";
import { Detail } from "../../components";

export class Item extends React.Component {
	componentDidMount() {
        if (this.props.location) {
			this.props.getDetailItem(
				this.props.location.pathname
			)
        }
	}

	render() {
		return(
			Boolean(this.props.item.data) && <Detail data={this.props.item.data} />
		)
	}
}

const mapStateToprops = state => state;

const mapDispatchToProps = (dispatch) => ({
	getDetailItem: path => dispatch(getDetail(path))
})

Item.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		])),
		PropTypes.objectOf(PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
			PropTypes.objectOf(PropTypes.oneOfType([
				PropTypes.number,
			PropTypes.string,
			])),
		]))
	]))
}

export default connect(mapStateToprops, mapDispatchToProps)(Item);
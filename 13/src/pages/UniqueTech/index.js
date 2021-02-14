import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { Detail } from "../../components";
import { getUniqueTech } from "../../redux/action";

export class UniqueTech extends React.Component {
	componentDidMount() {
		const path = this.props.url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1', '/');
		this.props.uniqueTechData(path)
	}
	render(){
		return(
			Boolean(this.props.uniqueTech.data) && 
			<Detail data={this.props.uniqueTech.data} />
		)
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
	uniqueTechData: path => dispatch(getUniqueTech(path))
})

UniqueTech.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UniqueTech);
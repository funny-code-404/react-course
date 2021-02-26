import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getUniqueUnit } from "../../redux/action";
import { Detail } from "../../components";

export class UniqueUnit extends React.Component {
	componentDidMount() {
		const path = this.props.url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/');
		this.props.uniqueUnitData(path)
	}
	render(){
		return (
			Boolean(this.props.uniqueUnit.data) &&
			<Detail data={this.props.uniqueUnit.data}/>
		)
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
	uniqueUnitData: path => dispatch(getUniqueUnit(path))
})

UniqueUnit.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UniqueUnit);
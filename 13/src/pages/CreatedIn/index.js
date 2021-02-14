import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { Detail } from "../../components";
import { getCreatedIn } from "../../redux/action";

export class CreatedIn extends React.Component{
	componentDidMount(){
		const path = this.props.url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/');
		this.props.createdInData(path);
	}
	render(){
		return(
			Boolean(this.props.createdIn.data) && <Detail data={this.props.createdIn.data}/>
		)
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
	createdInData: path => dispatch(getCreatedIn(path))
})

CreatedIn.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatedIn);
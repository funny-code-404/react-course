import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getData } from "../../redux/action";

export class MainNavigation extends React.Component {
	handleClick = () => {
		const { path } = this.props;
		this.props.getDataAction(path)
	}

	render(){
		return(
			<li>
				<Link to={this.props.path} onClick={this.handleClick} >{ this.props.title }</Link>
			</li>
		)
	}
}

const mapStateToProps = state => state;


const mapDispatchToProps = dispatch => ({
	getDataAction: path => dispatch(getData(path))
})

MainNavigation.propTypes = {
	path: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation)
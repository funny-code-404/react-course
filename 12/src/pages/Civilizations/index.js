import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { titles } from "../../config";
import { List } from "../../components";

export const Civilizations = (props) => {
	return (
		Boolean(props.civilizations) &&
		<List data={ props.civilizations } title={titles.civilizations} path={props.location.pathname}/>
	)
}

const mapStateToProps = state =>({
	civilizations: state.civilizations.data,
})

Civilizations.propTypes = {
	civilizations: PropTypes.arrayOf(
		PropTypes.objectOf(PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.oneOfType([
				PropTypes.number,
				PropTypes.string,
			]))
		]))
	)
}

export default connect(mapStateToProps)(Civilizations);
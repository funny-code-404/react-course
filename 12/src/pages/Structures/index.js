import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { titles } from "../../config";
import { List } from "../../components";

export const Structures = (props) => {
	return (
		Boolean(props.structures) &&
		<List data={ props.structures } title={titles.structures} path={props.location.pathname} />
	)
}

const mapStateToProps = (state) => ({
    structures: state.structures.data,
})

Structures.propTypes = {
	structures: PropTypes.arrayOf(
		PropTypes.objectOf(PropTypes.oneOfType([
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
	)
}

export default connect(mapStateToProps)(Structures);
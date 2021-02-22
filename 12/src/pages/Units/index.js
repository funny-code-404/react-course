import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { List } from "../../components";
import { titles } from "../../config";

export const Units = (props) => {
    return(
		Boolean(props.units) && 
		<List data={props.units} title={titles.units} path={props.location.pathname} /> 
    )
}

const mapStateToProps = (state) => ({
    units: state.units.data
})

Units.propTypes = {
	units: PropTypes.arrayOf(
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

export default connect(mapStateToProps)(Units);
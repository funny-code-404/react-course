import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { titles } from "../../config";
import { List } from "../../components";

export const Technologies = (props) => {
	return (		
		Boolean(props.technologies) &&
		<List data={props.technologies} title={titles.technologies} path={props.location.pathname} />
	)
}

const mapStateToProps = (state) => ({
    technologies: state.technologies.data
})

Technologies.propTypes = {
	technologies: PropTypes.arrayOf(
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

export default connect(mapStateToProps)(Technologies);
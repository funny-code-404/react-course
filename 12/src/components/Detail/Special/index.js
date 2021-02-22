import PropTypes from "prop-types";

import { en } from "../config";

const Special = ({ data }) => (
	data && 
	<div>
		<p>{ en.special }</p>
		<ul>
			{data.map((x) => <li key={x}>{x}</li>)}
		</ul>
	</div>
)

Special.propTypes = {
    data: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string)
	]))
}

export default Special;
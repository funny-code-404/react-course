import PropTypes from "prop-types";

import { en } from "../config";

const Cost = ({ data }) => (
	data && 
	<div>
		<p>{ en.costs }</p>
		<ul>
			{Object.keys(data).map((e, i)=> (
				<li key={i} >{e}<span>{data[e]}</span></li>
			))}
		</ul>
	</div>
)

Cost.propTypes = {
	data: PropTypes.objectOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	])).isRequired,
}


export default Cost;
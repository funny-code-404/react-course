import PropTypes from "prop-types";

const Cost = ({ data }) => (
	data && 
	<div>
		<p>Costs:</p>
		<ul>
			{data.Wood && <li>Wood - <span>{data.Wood}</span></li>}
			{data.Gold && <li>Gold - <span>{data.Gold}</span></li>}
			{data.Food && <li>Food - <span>{data.Food}</span></li>}
			{data.info && <li>Cost - <span>{data.info}</span></li>}
			{data.Stone && <li>Stone - <span>{data.Stone}</span></li>}
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
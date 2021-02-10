import PropTypes from "prop-types";

const AttackBonus = ({ data }) => (
	data && 
	<div>
		<p>Attack bonus:</p>
		<ul>
			{data.map((x) => <li key={x}>{x}</li>)}
		</ul>
	</div>
)

AttackBonus.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string),
}

export default AttackBonus;
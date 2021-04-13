import PropTypes from "prop-types";

import { en } from "../config";

const AttackBonus = ({ data }) => (
	data && 
	<div>
		<p>{ en.attack_bonus }</p>
		<ul>
			{data.map((x) => <li key={x}>{x}</li>)}
		</ul>
	</div>
)

AttackBonus.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string),
}

export default AttackBonus;
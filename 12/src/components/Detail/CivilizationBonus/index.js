import PropTypes from "prop-types";

import './bonus.css';
import { en } from "../config";

const CivilizationBonus = ({ data }) => (
	data && 
	<div className='civilization-bonus'>
		<p>{ en.civilization_bonus }</p>
		<ul>
			{data.map((x) => <li key={x}>{x}</li>)}
		</ul>
	</div>
)

CivilizationBonus.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string),
}

export default CivilizationBonus;
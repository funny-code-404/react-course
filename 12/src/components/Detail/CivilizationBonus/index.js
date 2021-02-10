import PropTypes from "prop-types";

import './bonus.css';

const CivilizationBonus = ({ data }) => (
	data && 
	<div className='civilization-bonus'>
		<p>Civilization bonus:</p>
		<ul>
			{data.map((x) => <li key={x}>{x}</li>)}
		</ul>
	</div>
)

CivilizationBonus.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string),
}

export default CivilizationBonus;
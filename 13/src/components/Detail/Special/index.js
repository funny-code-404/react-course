import PropTypes from "prop-types";

const Special = ({ data }) => (
	data && 
	<div>
		<p>Special:</p>
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
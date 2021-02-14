import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './list.css'

const List = ({data, title, path}) => {
	return  (
		<div className='list'>
			<h1>{ title }</h1>
			<ul>
				{
					Boolean(data.length) &&
						data.map(e => (
							<li key={e.id} className='li'>
								<Link to={`${path}/${e.id}`} className='link'>{e.name}</Link>
							</li>
					))
				}
			</ul>
		</div>
	)
}

List.propTypes = {
	data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
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
			]))
		]))
	]))),
	title: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
}

export default List;
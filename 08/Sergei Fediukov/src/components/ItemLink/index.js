import Rating from '../Rating'
import { Link } from 'react-router-dom'
import Item from '../Item'

const ItemLink = (props) => {
    return (
        <Link to={`/${props.data[1].id}`} className='hotel_link '>
            <Item data={props.data} />
        </Link>
    )
}
export default ItemLink
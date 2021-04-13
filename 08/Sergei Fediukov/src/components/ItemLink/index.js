import Rating from '../Rating'
import { Link } from 'react-router-dom'
import Item from '../Item'

const ItemLink = ({ data }) => {
    return (
        <Link to={`/${data[1].id}`} className='hotel_link '>
            <Item data={data} />
        </Link>
    )
}
export default ItemLink
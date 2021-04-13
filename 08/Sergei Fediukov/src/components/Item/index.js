import Rating from '../Rating'
const Item = (props) => {
    return (<>
        <div className='hotel'>
            <div className='hotel_img'>
                <img src={props.data[1].img} alt={props.data[1].name}></img>
            </div>
            <div className='hotel_info'>
                <p className='hotel_info-title'>{props.data[1].name}</p>
                <p>{props.data[1].description}</p>
                <Rating value={props.data[1].rating} />
            </div>
        </div>
    </>
    )
}
export default Item
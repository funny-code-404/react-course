import { useState, useContext } from 'react'
// import TodoContext from '../../context/TodoContext'

const Rating = ({ value }) => {

    const [checked = [false, false, false, false, false,].map((x, i) => i < value ? true : false), setChecked] = useState();

    return (<div className='rating'>
        {checked.map((x, i) => <input type="radio" checked={x} readOnly value={i + 1} key={i} />)}
    </div>
    )
}
export default Rating
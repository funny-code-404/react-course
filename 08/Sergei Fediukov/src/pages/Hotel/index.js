import { useState, useEffect } from 'react'
import { database } from '../../firebase'
import Item from '../../components/Item'
import FormEdit from '../../components/FormEdit'

const Hotel = (props) => {
    const [data, setData] = useState({})
    useEffect(() => {
        let cleanupFunction = false;
        database().ref('/SET_DATA').on('value', (snapshot) => {
            if (!cleanupFunction) setData(snapshot.val());
        })
        return () => cleanupFunction = true;
    }, [])
    const mas = Object.entries(data)
    const id = props.match.params.id - 1
    const handleRedirect = () => {
        props.history.push('/')
    }
    !+props.match.params.id ? props.history.goBack() : ''
    return (
        <div>
            <button className='nav_button' onClick={handleRedirect}>Вернуться на главную страницу</button>
            {
                mas.map((x, i) => {
                    return id === i ? <Item data={x} key={id} /> : ''
                })
            }
            <FormEdit id={id} redirect={props.history.push} />
        </div >
    )
}
export default Hotel
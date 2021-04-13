import { useState, useEffect } from 'react'
import { database } from '../../firebase'
import Item from '../../components/Item'
import FormEdit from '../../components/FormEdit'
import { useHistory } from 'react-router-dom'

const Hotel = (props) => {
    const [data, setData] = useState({});

    useEffect(() => {
        let cleanupFunction = false;
        database().ref('/SET_DATA').on('value', (snapshot) => {
            if (!cleanupFunction) setData(snapshot.val());
        })
        return () => cleanupFunction = true;
    }, []);

    const mas = Object.entries(data);
    const id = props.match.params.id;
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/')
    }
    !+props.match.params.id ? history.goBack() : ''
    return (
        <div className='hotel_page'>
            <button
                className='nav_button'
                onClick={handleRedirect}>
                Вернуться на главную страницу
            </button>
            {
                mas.map((x, i) => {
                    return x[0] === id ? <Item data={x} key={id} /> : ''
                })
            }
            <FormEdit id={id} />
        </div >
    )
}
export default Hotel
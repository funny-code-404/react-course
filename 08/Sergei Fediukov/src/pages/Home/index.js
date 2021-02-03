import List from '../../components/List'
import FormAdd from '../../components/FormAdd'
import { useState, useEffect } from 'react'
import { database } from '../../firebase'

const Home = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        let cleanupFunction = false;
        database().ref('/SET_DATA').on('value', (snapshot) => {
            if (!cleanupFunction) setData(snapshot.val());
        })
        return () => cleanupFunction = true;
    }, [])

    return (
        <div>
            <h1>
                Список отелей:
           </h1>
            {Boolean(data) ||
                <p className='warning'>В списке пока нет ни одного отеля</p>
            }
            {Boolean(data) &&
                <List data={data} />
            }
            <FormAdd />
        </div>
    )
}
export default Home
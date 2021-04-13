import List from '../../components/List'
import FormAdd from '../../components/FormAdd'
import { useState, useEffect, useContext } from 'react'
import { database } from '../../firebase'
import { auth } from '../../firebase';
import { AuthContext } from "../../components/context/Auth.context";

const Home = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        let cleanupFunction = false;
        database().ref('/SET_DATA').on('value', (snapshot) => {
            if (!cleanupFunction) setData(snapshot.val());
        })
        return () => cleanupFunction = true;
    }, [])
    const handleLogOut = () => {
        auth.signOut()
    }
    const { currentUser } = useContext(AuthContext)
    return (
        <div>
            <button onClick={handleLogOut} className='form_btn'>Log out ({currentUser ? currentUser.email : ''})</button>
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
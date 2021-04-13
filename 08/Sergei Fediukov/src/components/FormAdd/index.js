
import { useState, useEffect, useRef } from 'react'
import { database } from '../../firebase'
const FormAdd = () => {
    const [value, setValue] = useState({
        name: '',
        description: '',
        rating: '',
        img: '',
        id: 0,
    })
    useEffect(() => {
        let cleanupFunction = false;
        setRef.current = database().ref('/SET_DATA')
        database().ref('/SET_DATA').on('value', (snapshot) => {
            console.log()
            if (!cleanupFunction) setValue(prevState => {
                let id
                Boolean(snapshot.val()) ? id = snapshot.val().length - 1 : id = 0
                return {
                    ...prevState, id: id + 1
                }
            })
        })
        return () => cleanupFunction = true;
    }, [])

    let setRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        setRef.current.child(value.id).set(value);
        setValue(prevState => {
            return {
                name: '',
                description: '',
                rating: '',
                img: '',
                id: prevState.id,
            }
        })
    }
    const handleDelete = () => {
        setRef.current.remove();
    }

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form className='hotel_add-form'>
                <div>
                    <p>Добавить новый отель:</p>
                    <label> <span>Название</span>
                        <input onChange={handleChange} name='name' placeholder='name' value={value.name} />
                    </label>
                    <label> <span>Описание</span>
                        <input onChange={handleChange} name='description' placeholder='description' value={value.description} />
                    </label>
                    <label><span>Рейтинг</span>
                        <input onChange={handleChange} name='rating' placeholder=' 1 - 5' value={value.rating} />
                    </label>
                    <label><span>Фото</span>
                        <input onChange={handleChange} name='img' placeholder='http://img.jpg' value={value.img} />
                    </label>
                    {
                        <button {...((value.description && value.name && value.rating && value.img) && { onClick: handleSubmit })} className='form_btn'>Добавить отель в список</button>
                    }
                </div>
            </form>
            <button onClick={handleDelete} className='form_btn'>Удалить все отели</button>

        </>
    );
}
export default FormAdd;

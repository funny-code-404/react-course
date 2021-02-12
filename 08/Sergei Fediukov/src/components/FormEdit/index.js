
import { useState, useEffect, useRef } from 'react'
import { database } from '../../firebase'
import { useHistory, Link } from 'react-router-dom';


const FormEdit = (props) => {
    const [value, setValue] = useState({
        name: '',
        description: '',
        rating: '',
        img: '',
        id: props.id,
    })
    useEffect(() => {
        setRef.current = database().ref('/SET_DATA')
    }, [])
    let setRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        setRef.current.child(value.id).update(value);
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
    const history = useHistory();

    const handleDelete = () => {
        setRef.current.child(value.id).remove();
        history.push('/')
    };
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    return (
        <>
            <form className='hotel_add-form'>
                <div>
                    <p>Редактировать данные:</p>
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
                    <button {...((value.description && value.name && value.rating && value.img) && { onClick: handleSubmit })} className='form_btn' >Редактировать</button>
                    {
                        <button onClick={handleDelete} className='form_btn'>Удалить</button>
                    }
                </div>
            </form>
        </>
    );
}

export default FormEdit;

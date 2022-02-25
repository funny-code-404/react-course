import { useState } from 'react';
import { ACTION_UPDATE_USER } from '../../ducks/users';
import { useDispatch } from 'react-redux';

const FormEdit = ({ id, name, email }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState({ name: name, email: email });

    const handleChange = ({ target }) => {
        setValue((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    }

    const handleClickEdit = () => {
        dispatch(ACTION_UPDATE_USER(id, value))
    };

    return (
        <div>
            <input id={id} name="name" value={value.name} onChange={handleChange} />
            <input id={id} name="email" value={value.email} onChange={handleChange} />
            <button id={id} onClick={handleClickEdit} >Ready</button>
        </div>
    );
};

export default FormEdit;
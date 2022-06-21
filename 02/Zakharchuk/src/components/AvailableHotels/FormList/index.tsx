import { ChangeEvent, useState } from 'react';
import { data } from '../../Hotel/data';
import { Hotels } from '../../Hotel/Hotels';
import { Form } from '../SearchForm';

export const FormList = () => {
    const [name, setName] = useState(data);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(data.filter(hotel => hotel.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
    }
    return (
        <div>
            <Form onChange={handleChange}/>
            <Hotels title='Available Hotels' hotels={name} />
        </div>
    )
}


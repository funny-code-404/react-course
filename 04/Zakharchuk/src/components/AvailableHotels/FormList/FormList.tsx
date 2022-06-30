import { ChangeEvent, useState } from 'react';
import { data } from '../../data';
import { Hotels } from '../../Hotel/Hotels';


export const FormList = () => {
    const [name, setName] = useState(data);

    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setName(data.filter(hotel => hotel.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
    // }
    return (
        <div>
            <Hotels title='Available Hotels' hotels={name} />
        </div>
    )
}


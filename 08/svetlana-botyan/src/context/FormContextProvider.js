import { useState } from 'react';
import { FormContext } from './context';
import { v4 as uuidv4 } from 'uuid';

const NAMES = {
    task: 'task',
};

export const FormContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [input, setValue] = useState({
        [NAMES.task]: '',
    });

    const onChange = ({ target }) => {
        setValue({
            ...input,
            [target.name]: target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setData([
            ...data,
            {
                id: uuidv4(),
                [NAMES.task]: input[NAMES.task],
            },
        ]);

        setValue({
            ...input,
            [NAMES.task]: '',
        });

        e.target.reset();
    };

    // delete task
    const onClickDelete = ({ target }) => {
        const { id } = target;

        setData(data.filter((item) => item.id !== id));
    };

    return (
        <FormContext.Provider
            value={{
                NAMES,
                input,
                data,
                onChange,
                onSubmit,
                onClickDelete,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

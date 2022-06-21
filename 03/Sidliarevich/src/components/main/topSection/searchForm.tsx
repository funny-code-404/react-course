import React, {ChangeEvent, FormEvent} from "react";


type Props ={
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    value: string;
}

export const SearchForm = ({value, onChange, onSubmit}:Props) => {

    return <form className="form" onSubmit={onSubmit}>
        <input className="form__input-destination" value={value} onChange={onChange} type="text" placeholder="Search..."/>
        <input className="form__input-date" type="text" />
        <input className="form__input-tickets" type="text" />
        <button className="form__button" >Search</button>
    </form>
}
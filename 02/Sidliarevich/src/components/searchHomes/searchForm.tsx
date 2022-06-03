import {ChangeEvent, FormEvent} from "react";

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm = ({onChange}: Props) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    }

    return(
        <form className="search-homes__form" onSubmit={handleSubmit}>
            <input className="search-homes__input" onChange={onChange}  type="text" placeholder="Search..."/>
            <button className="search-homes__button">Search</button>
        </form>
    )
}
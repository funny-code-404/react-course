import { ChangeEvent, FormEvent, FormEventHandler } from "react";
import { Button } from "../../UI/Button"

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const inputDestinationTitle = 'Your destination or hotel name';
const inputPlaceholderText = 'New York';

export const HotelsSearchForm = ({onChange, onSubmit}: Props) => (
    <div className="top-section">
        <div className="container block">
            <h3 className="searchForm__destination-title">{inputDestinationTitle}</h3>
            <form onSubmit={onSubmit} className="searchForm searchForm__container">
                <input onChange={onChange} placeholder ={inputPlaceholderText} className="searchForm__input"/>
                <Button>Search</Button>
            </form>
        </div>
    </div>
)


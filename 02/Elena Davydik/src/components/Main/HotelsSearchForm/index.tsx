import { ChangeEvent } from "react";

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const searchFormTitle = 'Available hotels';
const inputPlaceholderText = 'Enter destination or hotel name';

export const HotelsSearchForm = ({onChange}: Props) => (
    <div className="container">
        <h2 className="title">{searchFormTitle}</h2>
        <input onChange = {onChange} placeholder ={inputPlaceholderText} className="searchForm__input"/>
    </div>
)

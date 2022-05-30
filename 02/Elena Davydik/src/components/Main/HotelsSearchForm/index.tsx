import { ChangeEvent } from "react";

type Props = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const searchFormTitle: string = 'Available hotels';

export const HotelsSearchForm = ({onChange}: Props) => (
    <div className="container">
        <h2 className="title">{searchFormTitle}</h2>
        <input onChange = {onChange} placeholder = 'Enter destination or hotel name' className="searchForm__input"/>
    </div>
)

import {ChangeEvent, FormEvent, useState} from 'react';
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';

type Props = {
    value: string; 
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} 

export const SearchForm = ({value, onChange}: Props) => {
   
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
    };

    const startValue: Date = new Date (new Date().getFullYear(), new Date().getMonth(), 14);
    //const endValue: Date = new Date (new Date().getFullYear(), new Date().getMonth(), +1, 15);

    return (
            <form className= "search-form" onSubmit={handleSubmit}>
                <input className="search-form__input search-form__action" value={value} onChange={onChange} type="text" placeholder="Where are you going?"/>
                <div className="search-form__date search-form__action">
                    <DateRangePickerComponent placeholder='Check-in — Check-out' 
                    startDate={startValue} ></DateRangePickerComponent>
                </div>
                <input className="search-form__ticket search-form__action" type="text" placeholder="2 Adults — 0 Children — 1 Room"/>
                <button className="search-form__btn">Search</button>
            </form>
        
    )
};


export default SearchForm;
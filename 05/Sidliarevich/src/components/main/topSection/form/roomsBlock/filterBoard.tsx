import {AdultsField} from "./adultsField";
import {ChildrenField} from "./childrenField";
import {RoomsField} from "./roomsField";
import {DataContext} from "../../../../context/dataContext";
import {config} from "../../../../config/locales/en";
import {memo, useContext} from "react";

const {subtitles: {topSection: {form: {filterBoard: {ask, years}}}}} = config;


export const FilterBoard = memo(() => {
    const {childrenCounter} = useContext(DataContext);
    const yearsList = new Array(17).fill(1).map((item, index) => index + 1)

    return <div className="filter-board">
        <AdultsField/>
        <ChildrenField/>
        <RoomsField/>
        {(childrenCounter > 0) &&
            (<div className="filter-board__form">
                <label className="filter-board__subtitle" htmlFor="">{ask}</label>
                <select className="filter-board__age-list" name="age-list">
                    {yearsList.map(item => <option key={item} value={item}>{item} {years}</option>)}
                </select>
            </div>)}
    </div>
})
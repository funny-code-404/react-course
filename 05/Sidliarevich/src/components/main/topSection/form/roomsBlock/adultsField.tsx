import {useContext} from "react";
import {DataContext} from "../../../../context/dataContext";
import {config} from "../../../../config/locales/en";
const {subtitles: {filterBoard: {adults}}} = config;

export const AdultsField = () => {
    const { adultsCounter, setAdultsCounter } = useContext(DataContext);

    const plusClick =() => {if (adultsCounter < 30) setAdultsCounter(adultsCounter + 1)};
    const minusClick = () => {if (adultsCounter > 0 ) setAdultsCounter(adultsCounter - 1)};

    return <div className="filter-board__field">
        <p className="filter-board__name">{adults}</p>
        <button className="filter-board__btn-remove" onClick={minusClick} disabled={adultsCounter === 0}>-</button>
        <p className="filter-board__counter">{adultsCounter}</p>
        <button className="filter-board__btn-add" onClick={plusClick} disabled={adultsCounter === 30}>+</button>
    </div>
}

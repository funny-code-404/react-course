import {useContext} from "react";
import {config} from "../../../../config/locales/en";
import {DataContext} from "../../../../context/dataContext";

const {subtitles: {filterBoard: {children}}} = config;

export const ChildrenField = () => {
    const { childrenCounter, setChildrenCounter } = useContext(DataContext);

    const plusClick =() => {if (childrenCounter < 10) setChildrenCounter(childrenCounter + 1)};
    const minusClick = () => {if (childrenCounter > 0 ) setChildrenCounter(childrenCounter - 1)};

    return <div className="filter-board__field">
        <p className="filter-board__name">{children}</p>
        <button className="filter-board__btn-remove" onClick={minusClick} disabled={childrenCounter === 0}>-</button>
        <p className="filter-board__counter">{childrenCounter}</p>
        <button className="filter-board__btn-add" onClick={plusClick} disabled={childrenCounter === 10}>+</button>
    </div>
}

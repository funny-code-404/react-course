import React, {useContext} from 'react';

import DataContext from "../../context/DataContext";
import CarsList from "../CarsList";

const Data = () => {
    const data = useContext(DataContext)
    return (
        <CarsList data={data} />
    );
}

export default Data;

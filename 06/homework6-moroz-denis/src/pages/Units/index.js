import React from 'react';

import FetchedData from '../../components/FetchedData'

const Units = () => {

    const endpoint = 'units';

    return <FetchedData endpoint = {endpoint}/>
}

export default Units

import React from 'react';

import FetchedData from '../../components/FetchedData'

const Civilizations = () => {

    const endpoint = 'civilizations';

    return <FetchedData endpoint = {endpoint}/>
}


export default Civilizations
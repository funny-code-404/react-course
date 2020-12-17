import React from 'react';

import FetchedData from '../../components/FetchedData'

const Structures = () => {

    const endpoint = 'structures';

    return <FetchedData endpoint = {endpoint}/>
}

export default Structures
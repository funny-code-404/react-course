import React from 'react';

import FetchedData from '../../components/FetchedData'

const Technologies = () => {

    const endpoint = 'technologies';

    return <FetchedData endpoint = {endpoint}/>
}

export default Technologies
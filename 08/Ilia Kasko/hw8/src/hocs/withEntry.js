import React from 'react';

import Entry from "../components/Entry";

const withEntry = (Component) => props => {

    return (
        <div>
            <Component {...props} />
            <br/>
            <Entry />
        </div>)
}

export default withEntry;
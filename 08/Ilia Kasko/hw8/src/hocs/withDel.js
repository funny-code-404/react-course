import React from 'react';

import Delete from "../components/Delete";

const withDel = (Component) => props => {

    return (
        <div>
            <Component {...props} />
            <Delete />
        </div>)
}

export default withDel;
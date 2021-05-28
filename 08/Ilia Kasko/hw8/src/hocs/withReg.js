import React from 'react';

import Registration from "../components/Regestration";

const withReg = (Component) => props => {

    return (
        <div>
            <Component {...props} />
            <br/>
            <Registration />
        </div>)
}

export default withReg;
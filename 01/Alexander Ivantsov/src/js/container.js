import React from 'react';

import Aside from './aside';
import MainBlock from './main-block';

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <Aside />
                <MainBlock />
            </div>
        )
    }
}

export default Container;
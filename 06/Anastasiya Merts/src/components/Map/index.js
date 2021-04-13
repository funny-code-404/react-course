import React from 'react';

class Map extends React.Component {

    handleClick = (e) => {
        let mouseX = 0;
        let mouseY = 0;
        mouseX = e.clientX;
        mouseY = e.clientY;
        const { history, } = this.props;
        history.push(`/${mouseX},${mouseY}/`);
    }

    render() {
        return (
            <>
                <div className="map" onClick={this.handleClick}></div>
            </>
        );
    }
}

export default Map;

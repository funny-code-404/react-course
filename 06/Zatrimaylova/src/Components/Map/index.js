import React from 'react';
import styled from 'styled-components';
import background from './img/map.jpg'

class Map extends React.Component {

    handleClick = (event) => {
        const { history } = this.props;
        history.push(`/${event.clientX}/${event.clientY}`); 
    }

    render() {
        return <MapStyled onClick={this.handleClick}></MapStyled>
    }
}

const MapStyled = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(${background});
    background-size: cover;
`;

export default Map;
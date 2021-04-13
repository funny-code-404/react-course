import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  position: fixed;
  left: ${props => props.left};
  top: ${props => props.top};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  margin: 0;
`;

class MapArea extends React.Component {
    
    handleClick = (e) => {
        let mouseX = 0;
        let mouseY = 0;
        mouseX = e.clientX;
        mouseY = e.clientY;
        const { history, } = this.props;
        history.push(`/${mouseX},${mouseY}/`);
    }
   
    render() {
        const { coordinates } = this.props.match.params;
        console.log(coordinates);
        const arrayCoordinates = coordinates.split(',');
        const coordX = arrayCoordinates[0];
        const coordY = arrayCoordinates[1];
        return (
            <>
                <div className="map" onClick={this.handleClick} >
                    <P className="map-area" left={`${coordX}px`} top={`${coordY}px`} />
                </div>
            </>
        );
    }
}

export default MapArea;

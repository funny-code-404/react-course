import React from 'react';
import styled from 'styled-components';

class Circle extends React.Component {

    render() {
        const { top, left } = this.props;

        return (
            <CircleStyled top={top} left={left} />
        )
    }
}

const CircleStyled = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 5px red solid;
    background-color: white;
    position: absolute;
    z-index: 100;
    top: ${props => props.top - 20}px;
    left: ${props => props.left - 20}px;
`;

export default Circle;
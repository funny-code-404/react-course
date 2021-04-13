import React from 'react';
import { Img } from '../../styles';

class Image extends React.Component {
    render() {
        const {src} = this.props;
        return (
            <Img src={src} />
        );
    }
}

export default Image;
import React from 'react';

class Item extends React.Component {

    render() {
        const { car } = this.props;
        const carProperties = Object.values(car);
        const tdPr = carProperties.map((item, i) =>
            <td key={i} >{item}</td>);
        return(
            tdPr
        );
    }
}

export default Item;
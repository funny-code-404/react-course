import React from 'react';
import { FIELDS_NAME, FIELDS } from '../fields';
import Item from './item';

class Table extends React.Component {
    state = {
        lineData: {
            [FIELDS.id]: '',
            [FIELDS.brand]: '',
            [FIELDS.model]: '',
            [FIELDS.year]: '',
            [FIELDS.price]: '',
        },
    };

    handleTrClick = (e, item) => {
        const {funApp} = this.props;
        funApp(item);
        console.log("aaaaa");
        this.setState({lineData: null,})
    };

    handleClick = () => {
        const { onChange } = this.props;
        const { data } = this.state;
        onChange(data);
        this.setState({
            data: {
                [FIELDS.id]: '',
                [FIELDS.brand]: '',
                [FIELDS.model]: '',
                [FIELDS.year]: '',
                [FIELDS.price]: '',
            },
        });
    };
    
    render() {
        const fields = Object.values(FIELDS_NAME);//array

        const { tableData: { carsValues } } = this.props;
        return (
            <table>
                <thead>
                    <Item car={fields} />
                </thead>
                <tbody>
                    {carsValues.map((item, i) => (
                        <tr key={item.id} onClick={(e) => this.handleTrClick(e, item)}>
                            <Item car = {item} />
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };
}

export default Table;
import React from 'react';
import { Input, Button } from './styles';
import { FIELDS_NAME, FIELDS } from '../fields';

class Form extends React.Component {

    state = {
        data: {
            [FIELDS.id]: '',
            [FIELDS.brand]: '',
            [FIELDS.model]: '',
            [FIELDS.year]: '',
            [FIELDS.price]: '',
        },
    };

    handleChange = (event) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,//copy prev
                [event.target.name]: event.target.value,
                [FIELDS.id]: this.props.lastId,
            }
        }));
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
        const { data: { brand, model, year, price } } = this.state;
        const { lineData } = this.props;
        let disabledFlag;
        return (
            <>
                <div className='form'>
                    {lineData !== null 
                        ? <Input name={FIELDS.brand} value={lineData.brand} placeholder={FIELDS.brand} onChange={this.handleChange} />
                        : <Input name={FIELDS.brand} value={brand} placeholder={FIELDS.brand} onChange={this.handleChange} />}

                    {lineData !== null 
                        ? <Input name={FIELDS.model} value={lineData.model} placeholder={FIELDS.model} onChange={this.handleChange} />
                        : <Input name={FIELDS.model} value={model} placeholder={FIELDS.model} onChange={this.handleChange} />}

                    {lineData !== null 
                        ? <Input name={FIELDS.year} value={lineData.year} placeholder={FIELDS.year} onChange={this.handleChange} />
                        : <Input name={FIELDS.year} value={year} placeholder={FIELDS.year} onChange={this.handleChange} />}

                    {lineData !== null 
                        ? <Input name={FIELDS.price} value={lineData.price} placeholder={FIELDS.price} onChange={this.handleChange} />
                        : <Input name={FIELDS.price} value={price} placeholder={FIELDS.price} onChange={this.handleChange} />}
                    {disabledFlag = (lineData !== null) ? false : (brand && model && year && price) ? false : true}
                    <Button onClick={this.handleClick} disabled = {disabledFlag} lineData={lineData}>Add</Button>
                </div>
            </>
        );
    }
}

export default Form;
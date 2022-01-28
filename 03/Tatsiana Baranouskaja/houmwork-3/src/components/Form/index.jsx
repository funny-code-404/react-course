import React from "react";
import Input from "../Input";




class Form extends React.Component {

    state = {
        values: {
           
        },
    };
   
    handleChange = (e) =>
    this.setState(prevState => ({
        values: {
            
        }
    }));
    

    render () {
        const {name, value, onChange} = this.props;
        return (
            <div>
                <Input name={name} value={value} onChange={onChange}/>
                <Input name={name} value={value} onChange={onChange}/>
                <Input name={name} value={value} onChange={onChange}/>
            </div>
        );
    }
}

export default Form;

  
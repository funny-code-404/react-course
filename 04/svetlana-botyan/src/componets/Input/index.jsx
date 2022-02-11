/* eslint-disable react/prop-types */
import React from "react";

class Input extends React.Component{
    render(){
        const { name, value ,onChange} = this.props;

        return (
          <>            
            <input name={name} value={value} onChange={onChange} />
          </>
        );
    }
}

export default Input
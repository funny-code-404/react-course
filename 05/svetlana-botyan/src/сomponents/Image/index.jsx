import React from "react";

class Image extends React.PureComponent{
    render(){
        const {src}=this.props
        return <img src={src} alt="#" />
    }
}

export default Image
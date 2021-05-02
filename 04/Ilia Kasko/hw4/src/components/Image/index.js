import React, {Component} from 'react';

class Image extends Component{

    componentDidMount() {
        const { data, setImage } = this.props
        fetch(data.random)
            .then((data) => data.json())
            .then((dog) => {
                setImage(dog.message)
            })
            .then(console.log('Собака была загружена'))
    }

    render(){
        const { image, breed } = this.props.data
        return (
            <img src={image} alt={breed} width="240" height="320" />
        );
    }
}

export default Image;

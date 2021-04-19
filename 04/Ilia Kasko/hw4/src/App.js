import React, {Component} from 'react';

import Item from "./components/Item";
import Image from "./components/Image";


class App extends Component{

    state = {
        image: null,
        random: 'https://dog.ceo/api/breeds/image/random',
        breed: 'random',
    }

    handleClick = (item) => {
        let url = 'https://dog.ceo/api/breed/' + item.url + '/images/random'
        fetch(url)
            .then((data) => data.json())
            .then((dog) => {
                this.setState((prevState) => ({
                    ...prevState,
                    image: dog.message,
                    breed: item.breed,
                }))
            })
            .then(console.log('Собака была загружена'))
    }
    setImage = (randomImage) => {
        this.setState((prevState) => ({
            ...prevState,
            image: randomImage,
        }))
    }


    render(){
        return (
            <div>
                <Item onClick={this.handleClick} />
                <Image data={this.state} setImage={this.setImage} />
            </div>
        )
    }
}

export default App;

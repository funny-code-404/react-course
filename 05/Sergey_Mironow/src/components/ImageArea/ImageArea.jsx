import React from "react";
import './ImageArea.scss';


class ImageArea extends React.Component {
    state = {
        randomDog: '',
    }

    wasTheDogReceived = false

    // 'https://dog.ceo/api/breeds/image/random' --- рандомная рандомная
    // 'https://dog.ceo/api/breed/pug/images/random' --- рандомная из породы(pug)

    async componentDidMount(){
        const dog = (await (await fetch('https://dog.ceo/api/breeds/image/random')).json()).message
        this.setState((prevState) => ({
            ...prevState,
            randomDog: dog
        }))
    }

    async shouldComponentUpdate(nextProps, nextState){
        if (nextProps.breed === '') return false
        if (!this.wasTheDogReceived){
            const dog = (await (await fetch(`https://dog.ceo/api/breed/${nextProps.breed}/images/random`)).json()).message
            this.setState((prevState) => ({
                ...prevState,
                randomDog: dog,
            }))
        }
    }

    componentDidUpdate(){
        this.wasTheDogReceived = !this.wasTheDogReceived
    }

    render(){
        return (
            <div className="ImageArea">
                <img src={this.state.randomDog} alt = ''/>
            </div>
        )
    }
}



export default ImageArea
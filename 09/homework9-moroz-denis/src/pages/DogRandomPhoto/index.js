import React from 'react';
import BASE_URL from '../../services'

class DogRandomPhoto extends React.Component {

    state = {
        dogPhoto: {},
        isLoading: false,
      };  

    async getData(url) {

        this.setState(prevState => ({
          ...prevState,
          isLoading: true
        }));

        const res = await fetch(url);
        const { message: data } = await res.json();
        
        this.setState(prevState => ({
          ...prevState,
          dogPhoto: data,
          isLoading: false
          }))
      };
    
      componentDidMount() {
        const { breed } = this.props.match.params 
        console.log(`${BASE_URL}` + 'breed/' + `${breed}` + '/images/random')
        this.getData(`${BASE_URL}` + 'breed/' + `${breed}` + '/images/random');
      };

      handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
      };

      render() {

        const { breed } = this.props.match.params 

        const { dogPhoto, isLoading } = this.state;
    
        return ( 
            <div>
                <h1>{breed.charAt(0).toUpperCase() + breed.slice(1)}</h1>
                <img src = {`${dogPhoto}` }/>
                <p>Here is the photo!</p>
                <button onClick = {this.handleGoBack}>Go back</button> 
            </div>
        )
      };
}; 

export default DogRandomPhoto



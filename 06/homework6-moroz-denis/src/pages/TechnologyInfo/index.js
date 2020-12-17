import React from 'react';

import Spinner from '../../components/Spinner'
import '../../styles/item-info.css'

class TechnologyInfo extends React.Component {

    state = {
        TECHNOLOGY_URL: 'https://age-of-empires-2-api.herokuapp.com/api/v1/technology/',   
        technology: [],
        isLoading: false,
      }  

    async getData() {

        this.setState(prevState => ({
          ...prevState,
          isLoading: true
        }));

        const res = await fetch(`${this.state.TECHNOLOGY_URL}` + `${this.props?.match?.params?.id}`);
        const data = await res.json();
        
        this.setState(prevState => ({
          ...prevState,
          technology: data,
          isLoading: false 
          }))
      };
    
      componentDidMount() {
        this.getData();
      }

      handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
      }

      handleGoHome = () => {
        const { history } = this.props;
        history.push('/');
      }
      
      render() {

        const { technology, isLoading } = this.state;

        const { name, description, expansion, build_time, age  } = technology;
    
        return (
             <div className = 'item-info'>
               {
                 isLoading ? Spinner() :
                 <div>
                    <h1>Technology Info - {name}</h1>
                    <p>{description}</p>
                    <ul>
                        <li>Expansion: {expansion}</li>
                        <li>Build time: {build_time}</li>
                        <li>Age: {age}</li>
                    </ul>
                    <button onClick = {this.handleGoBack}>Go back</button>
                    <button onClick = {this.handleGoHome}>Go home</button> 
                 </div>
               }    
            </div>   
        );
      } 

} 

export default TechnologyInfo



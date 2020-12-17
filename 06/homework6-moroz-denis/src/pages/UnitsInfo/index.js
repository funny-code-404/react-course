import React from 'react';

import Spinner from '../../components/Spinner'
import '../../styles/item-info.css'

class UnitsInfo extends React.Component {

    state = {
        UNITS_URL: 'https://age-of-empires-2-api.herokuapp.com/api/v1/unit/',   
        unit: [],
        isLoading: false,
      }  

    async getData() {

        this.setState(prevState => ({
          ...prevState,
          isLoading: true
        }));

        const res = await fetch(`${this.state.UNITS_URL}` + `${this.props?.match?.params?.id}`);
        const data = await res.json();
        
    
      this.setState(prevState => ({
        ...prevState,
        unit: data,
        isLoading: false
        }))
      };

      handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
      }

      handleGoHome = () => {
        const { history } = this.props;
        history.push('/');
      }
    
      componentDidMount() {
        this.getData();
      }

      render() {

        const { unit, isLoading } = this.state;

        const { name, description, expansion, build_time, range, attack, armor, /* attack_bonus, armor_bonus */ } = unit;
    
        return (
             <div className = 'item-info'>
               {
                isLoading ? Spinner() :
                <div>
                  <h1>Unit Info - {name}</h1>
                  <p>{description}</p>
                  <ul>
                      <li>Expansion: {expansion}</li>
                      <li>Build time: {build_time}</li>
                      <li>Range: {range}</li>
                      <li>Attack: {attack}</li>
                      <li>Armor: {armor}</li>
                  </ul>
                  <button onClick = {this.handleGoBack}>Go back</button>
                  <button onClick = {this.handleGoHome}>Go home</button>  
                </div> 
              }
            </div>  
        );
      } 

} 

export default UnitsInfo



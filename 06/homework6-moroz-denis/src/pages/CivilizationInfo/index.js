import React from 'react';
import { Link } from 'react-router-dom'

import Spinner from '../../components/Spinner'

import uniqueUnitIcon from '../../assets/images/helmet.svg'
import uniqTechIcon from '../../assets/images/technical-support.svg'
import '../../styles/item-info.css'

class CivilizationInfo extends React.Component {

    state = {
        CIVILIZATION_URL: 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/',   
        civilization: [],
        isLoading: false,
      }  

    async getData() {

        this.setState(prevState => ({
          ...prevState,
          isLoading: true
        }));

        const res = await fetch(`${this.state.CIVILIZATION_URL}` + `${this.props?.match?.params?.id}`);
        const data = await res.json();
        
        this.setState(prevState => ({
          ...prevState,
          civilization: data,
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

        const {  civilization, isLoading } = this.state;

        const { name, expansion, army_type, unique_unit, unique_tech, team_bonus, civilization_bonus } = civilization;
    
        return (
          <div className = 'item-info'>
            
              {
                isLoading ? Spinner() :
                <div>
                  <h1>Civilization Info - {name}</h1>
                  <p>Expansion: {expansion}</p>
                  <p>Army type: {army_type}</p>
                  <p>Team bonus: {team_bonus}</p>
                  
                  <ul>
                      <h2>Civilization bonus</h2>
                      
                      {
                        Boolean(civilization_bonus !== undefined) && civilization_bonus.map((bonus, index) => 
                          <li key = {index}>{bonus}</li>
                        )
                      }
                  </ul>

                  <div className = 'flex-wrapper'>
                          {
                              Boolean(unique_unit !== undefined) &&
                                  <div>
                                      <p>Unique unit</p>
                                      <Link to = {unique_unit}><img alt='unit' src = {uniqueUnitIcon}/></Link>
                                  </div>
                          }
                      
                          {
                              Boolean(unique_tech !== undefined) &&
                                  <div>
                                      <p>Unique technology</p>
                                      <a href = {unique_tech}><img alt='tech' src = {uniqTechIcon}/></a>
                                  </div>
                          }
                  </div>

                  <div className ='buttons'>
                    <button onClick = {this.handleGoBack}>Go back</button>
                    <button onClick = {this.handleGoHome}>Go home</button>
                  </div> 

                </div>
              }
          </div>      
        );
      }
} 

export default CivilizationInfo
      
              
                
                
                    
            
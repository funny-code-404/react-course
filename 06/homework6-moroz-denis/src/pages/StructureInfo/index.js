import React from 'react';

import Spinner from '../../components/Spinner'
import '../../styles/item-info.css'

class StructureInfo extends React.Component {

    state = {
        STRUCTURE_URL: 'https://age-of-empires-2-api.herokuapp.com/api/v1/structure/',   
        structure: [],
        isLoading: false,
      }  

    async getData() {

        this.setState(prevState => ({
          ...prevState,
          isLoading: true
        }));

        const res = await fetch(`${this.state.STRUCTURE_URL}` + `${this.props?.match?.params?.id}`);
        const data = await res.json();
        
        this.setState(prevState => ({
          ...prevState,
          structure: data,
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

        const { structure, isLoading } = this.state;

        console.log(structure)

        const { name, description, expansion, build_time, hit_points } = structure;
    
        return (
             <div className = 'item-info'>
               {
                 isLoading ? Spinner() :
                 <div>
                    <h1>Structure Info - {name}</h1>
                    <p>{description}</p>
                    <ul>
                        <li>Expansion: {expansion}</li>
                        <li>Build time: {build_time}</li>
                        <li>Hit point: {hit_points}</li>
                    </ul>
                    <button onClick = {this.handleGoBack}>Go back</button>
                    <button onClick = {this.handleGoHome}>Go home</button>  
                 </div>
               }   
            </div>
              
        );
      } 

} 

export default StructureInfo



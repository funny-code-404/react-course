import React from 'react';

import List from './List'
import Spinner from './Spinner'


class FetchedData extends React.Component {

    state = {
      BASE_URL: 'https://age-of-empires-2-api.herokuapp.com/api/v1/',   
      data: [],
      isLoading: false,
    }
  
  async getData() {

      this.setState(prevState => ({
        ...prevState,
        isLoading: true
      }));

      const res = await fetch(`${this.state.BASE_URL}` + `${this.props.endpoint}`);
      const {[this.props.endpoint]: data} = await res.json();
  
      this.setState(prevState => ({
        ...prevState,
        data,
        isLoading: false 
      }))

    };
  
    componentDidMount() {
      this.getData();
    }
  
    render() {
  
      const { data, isLoading } = this.state;
      const { endpoint } = this.props
  
      return (
        <div style = {{position: 'relative'}}>
          {
            isLoading ? Spinner() :
            Boolean(data.length) && <List endpoint = {endpoint} data = {data} />
          }
        </div>  
       
      );
    } 
  }
  
  export default FetchedData
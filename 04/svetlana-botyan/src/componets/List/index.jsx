/* eslint-disable import/named */
import React from "react";
import {  Wrapper  } from './styles';

const url = 'https://jsonplaceholder.typicode.com/posts'

class List extends React.Component{
    state={
        data:null
    }

   async componentDidMount(){
       const response = await fetch (url)
       const data =  await response.json()      
       
       this.setState((prevState) => ({
            ...prevState,          
              data:data
        }))
    }

    render (){
        const {data} =this.state
      
        return (            
        <Wrapper>
          { data && data.map(({id, title, body})=>(
            <div key={id}>
             <h2>{title}</h2>
             <p>{body}</p>
            </div>
            ))}
        </Wrapper>
     )        
    }
}

export default List
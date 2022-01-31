/* eslint-disable no-prototype-builtins */
/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import Input from '../Input';
import { NAMES, FIELD, MESSAGE, PATTERN }  from './consts';
import {dataForm }  from '../../consts';
import Table from '../Table';

import {  FormContainer } from './styles';

class Form extends React.Component{
  state = {
  values: {
    [NAMES.brand]: '',
    [NAMES.model]: '',
    [NAMES.year]: '',
    [NAMES.price]: '',
  },
  errors: {
    [NAMES.brand]: true,
    [NAMES.model]: true,
    [NAMES.year]: true,
    [NAMES.price]: true,
  },
  message: {
    [NAMES.brand]: true,
    [NAMES.model]: true,
    [NAMES.year]: true,
    [NAMES.price]: true,
  },
}

  // обработка input
  handleChange = (e) => {  
    const { name, value} = e.target
   
    const valid = PATTERN[name].test(value)

    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: valid
      },
      values: {
        ...prevState.values,
        [name]: value
      }
    }))
  }

  // обработка submit
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, value} = e.target
    const { values, errors} = this.state
    
    for (let i in values){          
      if(!values[i]){        
        this.setState((prevState) => ({
          ...prevState,
          message: {
            ...prevState.values,
            [name]: false
          }
        }))
      }
    }

    const conditionErrors = !errors[NAMES.brand] && !errors[NAMES.model] && 
    !errors[NAMES.year]&& !errors[NAMES.price] ;

    const conditionValues = values[NAMES.brand] && values[NAMES.model] && 
    values[NAMES.year]&& values[NAMES.price] ;

    if (!conditionErrors && conditionValues) {
      dataForm.push(values)
      
      this.setState((prevState) => ({
        ...prevState,
        values: {
          [NAMES.brand]: '',
          [NAMES.model]: '',
          [NAMES.year]: '',
          [NAMES.price]: '',
        }
      }))      
      e.target.reset()
    }
  }

  // клик по таблице
  handleClickTable=({target})=>{
    const row=target.parentElement 

   for (let i=1; i < 5; i++){
     const cell=row.getElementsByTagName("td")[i].textContent
     const name=row.getElementsByTagName("td")[i].getAttribute("name")        

     this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: [cell]
      }
    }))    
   }     
  }

  render(){
    const {values, errors, message} = this.state 
    
    return(
      <>
       <FormContainer onSubmit={this.handleSubmit}>            
        <label>{FIELD[NAMES.brand]}
         <Input name = {NAMES.brand} value = {values[NAMES.brand]}
          onChange={this.handleChange}/>
         {!errors[NAMES.brand] && <span><p>Неверное имя</p></span>}
         {!message[NAMES.brand] && <span><p>{MESSAGE}</p></span>}
         </label>

         <label>{FIELD[NAMES.model]}
         <Input name = {NAMES.model} value = {values[NAMES.model]}
         onChange={this.handleChange}/>
         {!errors[NAMES.model] && <span><p>Неверное имя</p></span>}
         {!message[NAMES.model] && <span><p>{MESSAGE}</p></span>}
         </label>

         <label>{FIELD[NAMES.year]}
         <Input name = {NAMES.year} value = {values[NAMES.year]}
         onChange={this.handleChange}/>
         {!errors[NAMES.year] && <span><p>Неверное имя</p></span>}
         {!message[NAMES.year] &&<span><p>{MESSAGE}</p></span>}
         </label>

         <label>{FIELD[NAMES.price]}
         <Input name = {NAMES.price} value = {values[NAMES.price]}
         onChange={this.handleChange}/>
         {!errors[NAMES.price] && <span><p>Неверное имя</p></span>}
         {!message[NAMES.price] && <span><p>{MESSAGE}</p></span>}
         </label>

        <button type="submit" >Добавить</button>
      </FormContainer>
      <Table data={dataForm} onClick={this.handleClickTable}/>
      </>    

    )
  }
}


export default Form
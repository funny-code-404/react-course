/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import './App.css';
import Form from './components/Form';
import Input from './components/Input';
import { NAMES } from './components/Form/consts';
import { useEffect, useState } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
     display:flex;
     width: 300px;

     form{
       padding: 15px;
       border: 1px solid green;
       border-radius: 15px;
     }

`;

function App() {
  return (
    <Wrapper className="App">
      <Form render={(props) => {
        const [lastName, setLastName] = useState(props.lastName || '')
        const [year, setYear] = useState(props.year || '')
        const [phone, setPhone] = useState(props.phone || '')

        useEffect(() => {
          setLastName(lastName)
          setYear(year)
          setPhone(phone)
        }, [])


        const handleChange = ({ target }) => {
          const { name, value } = target

          name === NAMES.lastName && setLastName(value)
          name === NAMES.year && setYear(value)
          name === NAMES.phone && setPhone(value)
        }

        return (
          <div>
            <h2>Регистрация</h2>
            <input type="checkbox" />
            <Input name={NAMES.lastName}
              placeholder={props.lastName}
              value={lastName}
              onChange={handleChange} />

            <Input name={NAMES.year}
              placeholder={props.year}
              value={year}
              onChange={handleChange} />

            <Input name={NAMES.phone}
              placeholder={props.phonee}
              value={phone}
              onChange={handleChange} />

            <button type='submit'>Зарегистрироваться</button>
          </div>
        )
      }} />

      {/* second form */}
      <Form render={() => {
        return (
          <div>
            <h2>Вход</h2>
            <label> <input type="checkbox" />оставлять меня в системе</label>
            <button type='submit'>Войти</button>
          </div>)
      }} />
    </Wrapper>
  );
}

export default App;

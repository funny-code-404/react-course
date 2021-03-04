import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  border: 1px solid black;
  margin: 16px auto auto 16px;
  display: flex;
  flex-direction: column;
`

export const InputsField = styled.form`
  width: 90%;
  margin: 8px auto auto 8px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 300px;
  height: 25px;
  border: 2px solid grey;
  border-radius: 4px;
  margin-top: 4px;
`

export const Button = styled.button`
  width: 100px;
  height: 25px;
  font-weight: bold;
  margin: 8px 36px 8px auto;
  border: 2px solid rgb(144, 172, 232);
  border-radius: 4px;
  background-color: rgb(144, 172, 232);
`
export const Priority = styled.p`
  font-weight: bold;
  margin: 8px 4px auto 4px;
`

export const Select = styled.select`
  margin-left: 8px;
  border: 2px solid grey;
  border-radius: 4px;
`

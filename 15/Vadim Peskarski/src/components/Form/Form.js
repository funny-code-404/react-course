import { useEffect, useState, useRef } from 'react';
import { database } from '../../firebase';
import styled from 'styled-components';

const FormElement = styled.form`
  width: 320px;
  margin: 16px;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 20px;
  border-radius: 4px;
  margin: 8px;
`

const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-left: auto;
  margin-right: 4px;
  font-size: 20px;
  border-radius: 4px;
`

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: ''
  });

  const pushRef = useRef();

  useEffect(() => {
    pushRef.current = database().ref('/PUSH_DATA');
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    pushRef.current.push(data);
    setData({
      name: '',
      email: ''
    })
  }

  return (
    <FormElement onSubmit={handleSubmit}>
      <Input name="name" placeholder="name" value={data.name} onChange={handleChange} />
      <Input name="email" placeholder="email" value={data.email} onChange={handleChange} />
      <Button>Send</Button>
    </FormElement>
  )
}

export default Form;

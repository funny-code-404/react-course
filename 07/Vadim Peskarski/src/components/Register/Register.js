import styled from 'styled-components';
import { Input } from '../Form/Form.js';

export const Button = styled.button`
  float: right;
  margin: 8px 8px 0px 0px;
`

const Register = () => (
  <div>
    <h3>Регистрация</h3>
    <Input name="surname" placeholder="фамилия" />
    <Input name="year" placeholder="год рождения" />
    <Input name="phone" placeholder="номер телефона" />
    <Button>Зарегистрироваться</Button>
  </div>
)

export default Register;

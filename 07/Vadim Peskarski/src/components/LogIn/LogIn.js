import styled from 'styled-components';
import { Button } from '../Register/Register.js'

const Text = styled.p`
  font-size: 12px;
  margin-bottom: 40px;
`

const LogIn = () => (
  <div>
    <h3>Вход</h3>
    <Text><input type="checkbox" />
    Оставлять меня в системе</Text>
    <Button>Войти</Button>
  </div>
)

export default LogIn;

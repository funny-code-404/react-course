import styled from 'styled-components';
import { Button } from '../Register/Register.js';

const Text = styled.p`
font-size: 12px;
`

const TextArea = styled.textarea`
  width: 184px;
  height: 50px;
`

const DeleteAccount = () => (
  <div>
    <h3>Удаление аккаунта</h3>
    <TextArea placeholder="Оставьте отзыв" />
    <Text>Оцените работу приложения<br/>
      1<input type="radio" />
      2<input type="radio" />
      3<input type="radio" />
      4<input type="radio" />
      5<input type="radio" />
    </Text>
    <Button>Удалить</Button>
  </div>
)

export default DeleteAccount;

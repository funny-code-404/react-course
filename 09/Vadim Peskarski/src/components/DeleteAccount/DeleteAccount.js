import styled from 'styled-components';
import { Button } from '../Register/Register.js';

const Text = styled.div`
font-size: 12px;
`

const TextArea = styled.textarea`
  width: 184px;
  height: 50px;
`

const DeleteAccount = () => {
  const marks = [1, 2, 3, 4, 5]

  return (
    <div>
      <h3>Удаление аккаунта</h3>
      <TextArea placeholder="Оставьте отзыв" />
      <Text>Оцените работу приложения<br />
        {marks.map((item, index) => {
          return (
            <p key={index}>
              <span>{item}</span><input type="radio" />
            </p>
          )
        })}
      </Text>
      <Button>Удалить</Button>
    </div>
  )
}

export default DeleteAccount;

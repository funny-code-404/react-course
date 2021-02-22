import styled from 'styled-components';
const UserForm = styled.div`
  width: 200px;
  min-height: 250px;
  border: 1px solid black;
  padding: 8px;
  margin-bottom: 8px;
`
export const Input = styled.input`
  width: 184px;
  margin-bottom: 4px;
`

const Form = ({ renderData, render }) => {
  console.log(renderData);
  return (
    <UserForm>
      <div>
        <Input name="name" placeholder="имя" />
        <Input name="email" placeholder="email" />
        <Input name="email" placeholder="пароль" />
      </div>
      <div>
        {render(renderData)}
      </div>
    </UserForm>
  )
}

export default Form;

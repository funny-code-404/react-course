import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {users} from '../dataUsers'

const User = styled.div`
  font-size: 1.6rem;
  margin: 12px;
  padding: 6px 12px;
  border: green 2px solid;
  width: 300px;
  border-radius: 6px;
`

const Contacts = () => {

  const history = useHistory()

  const handleClick = (e) => {
    const id = e.target.id
    history.push(`contacts/${id}`)
  }

    return(
      <>
      <h1>
        Contacts
      </h1>
      {users.map((user, i) => (
        <User id={user.id} onClick={handleClick}>{user.name}</User>
      ))}
      </>
    )
}
export default Contacts

import { useHistory } from 'react-router';
import {users} from '../dataUsers'
import styled from 'styled-components'

const Friends = styled.div`
  margin-bottom: 20px;
  user-select: none;
    div{
      padding: 3px 12px;
      border-bottom: 1px solid lightgray;
    }
    div:hover{
      border-bottom: 1px solid gray;
    }
`

const UserFriends = (props) => {
  const { friends } = props
  const history = useHistory()
  console.log('friends', friends);

  const handleClick = (e) => {
    history.push(`/contacts/${e.target.id}`)
  }

  return(
    <Friends>
      {friends.map(id => (
        users.map(user => (
          id === user.id ? <div id={id} onClick={handleClick} >{user.name}</div> : false
        ))
      ))}
    </Friends>
  )
}

export default UserFriends

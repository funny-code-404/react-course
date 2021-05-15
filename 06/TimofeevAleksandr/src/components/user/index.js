import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'

import { users } from '../dataUsers'
import UserFriends from '../userFriends'

const UserWrapper = styled.div`

    .user-info{
      margin-bottom: 40px;
    }
    h2, h3{
      border-bottom: 1px solid lightgray;
      padding: 0 12px;
    }
`

const User = () => {

  const history = useHistory()
  const params = useParams()

  const handleClick = () => history.goBack()

  return(
    <UserWrapper>
      {users.map((user, i) => (
        user.id === params.id ? (
          <div>
            <div className='user-info'>
              <h2>{user.name}</h2>
              <h3>{user.phone}</h3>
            </div>
            <div>
              <p>Друзья</p>
              <UserFriends friends={user.friends}/>
            </div>
          </div>
        ) : false
      ))}
      <button onClick={handleClick}>back</button>
    </UserWrapper>
  )
}
export default User

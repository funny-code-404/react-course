
import { useHistory } from 'react-router';
import { users } from '../Data'


const Friends = (props) => {
    const { friends, isContact } = props
    const history = useHistory()

    const handleClick = (e) => {
        history.push(`/contacts/${e.target.id}`)
    }

    return(
        <div>
            {friends.map(id => (
                users.map(user => (
                    id === user.id ? <div id={id} onClick={handleClick} >{isContact? user.phone: user.name}</div> : false
                ))
            ))}
        </div>
    )
}

export default Friends
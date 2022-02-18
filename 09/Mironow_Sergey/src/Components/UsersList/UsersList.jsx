import { useDispatch, useSelector } from "react-redux"
import { ACTION_DELETE_USER, ACTION_EDIT_USER_OPEN } from "../../ducks/users"
import EditMiniForm from "../EditMiniForm/EditMiniForm"
import styled from 'styled-components'



export default function UsersList(props){
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleDelete = (id, users) => (event) => {
        dispatch(ACTION_DELETE_USER({id: id, users: users,}))
    }

    const handleEdit = (user, users) => (event) => {
        dispatch(ACTION_EDIT_USER_OPEN({user, users}))
    }

    return (
        <UlStyled>
            {users.map((user, i, users) => (
                <li className="user" key={user.id} id={user.id} >
                    <div>
                        {user.edited ? <EditMiniForm user = {user} users = {users}/> : [
                            <button onClick={handleDelete(user.id, users)}>Delete</button>,
                            <button onClick={handleEdit(user, users)}>Edit</button>
                        ]}
                    </div>
                    <p><span>Name: </span>{user.name}</p>
                    <p><span>Password: </span>{user.mail}</p>
                </li>
            ))}
        </UlStyled>

    )

}

const UlStyled = styled.ul`
    margin: 0px auto;
    padding: 5px;
    max-width: 600px;
    border-left: 3px solid brown;
    list-style: none;
    background-color: rgb(83, 127, 153);
    button {
        padding: 3px;
        margin: 0px 3px 0px 3px;
        border:2px solid brown;
        border-radius: 6px;
    }
    li {
        margin: 5px 0 5px 40px;
    }
    p {
        color: #fff;
        margin: 5px 3px 0px 3px;
    }
    span {color: orange;}

`
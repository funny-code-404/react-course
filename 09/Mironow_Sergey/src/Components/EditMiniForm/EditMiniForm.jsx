import { useDispatch } from "react-redux"
import { ACTION_EDIT_USER_CLOSE } from "../../ducks/users"
import { useState } from "react"
import styled from 'styled-components'



export default function EditMiniForm(props){
    const dispatch = useDispatch()
    const [inputVs, setInputVs] = useState({name: props.user.name, mail: props.user.mail})

    const handleEdit = (user, users) => (event) => {
        event.preventDefault()
        dispatch(ACTION_EDIT_USER_CLOSE({user, users, inputVs}))
    }

    const handleChange = (event) => {
        setInputVs((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <DivStyled>
            <input name='name' placeholder='Name' value={inputVs.name} onChange={handleChange}/>
            <input name='mail' placeholder='Mail' value={inputVs.mail} onChange={handleChange}/>
            <button onClick={handleEdit(props.user, props.users)}>Edit</button>           
        </DivStyled>
    )

}

const DivStyled = styled.div`   
    input {
        padding: 3px;
        margin: 0px 3px 0px 3px;
        border: 2px solid brown;
        border-radius: 6px;
    }
    button {
        padding: 3px;
        margin: 0px 3px 0px 3px;
        border:2px solid brown;
        border-radius: 6px;
    }


`
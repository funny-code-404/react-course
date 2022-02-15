import { useCallback, useState } from "react"
import { useDispatch } from 'react-redux'
import { ACTION_ADD_USER } from "../../ducks/users"
import styled from 'styled-components'




export default function Form(props){
    const dispatch = useDispatch()
    const [inputVs, setInputVs] = useState({name: '', mail: ''})
    console.log(FormStyled)

    const handleChange = (event) => {
        setInputVs((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = useCallback((event) => {
        event.preventDefault()
        dispatch(ACTION_ADD_USER(inputVs))
        setInputVs({name: '', mail: ''})

    }, [inputVs, dispatch])

    return (
        <FormStyled onSubmit={handleSubmit}>
            <input name='name' placeholder='Name' value={inputVs.name} onChange={handleChange}/>
            <input name='mail' placeholder='Mail' value={inputVs.mail} onChange={handleChange}/>
            <button className="button">Create user</button>           
        </FormStyled>
    )

}



const FormStyled = styled.form`
    margin: 0px auto;
    padding: 5px;
    max-width: 600px;
    border-bottom: 3px solid brown;
    input {
        padding: 5px;
        margin: 0px 3px 0px 3px;
        border:3px solid brown;
        border-radius: 6px;
    }
    button {
        padding: 5px;
        margin: 0px 3px 0px 3px;
        border:3px solid brown;
        border-radius: 6px;
    }


`
import {  useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { ACTION_SEND_REVIEW } from "../../ducks/reviews/reducer"

function reviewIsValid(values){
    let iSvalid = true
    iSvalid = /^\w{3,14}$/.test(values.name) && /^([\w\d]+?.*?)@(.+?\.)*?(?<=\.).+?$/.test(values.email)  
    return iSvalid
}

export default function Form(props){
    const dispatch = useDispatch()
    const [values, setValues] = useState({name: '', email: '', review: '',})
    const handleChange = (event) => {
        setValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (reviewIsValid(values)){
            dispatch(ACTION_SEND_REVIEW(values))
            setValues((prev) => Object.fromEntries(Object.keys(prev).map((el) => [el, ''])))
        } else alert('Invalid Name or Email')

    }

    
    return (
        <FormStyled onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={values.name} onChange={handleChange}/>
            <input name="email" placeholder="Mail" value={values.email} onChange={handleChange}/>
            <input name="review" placeholder="Review" value={values.review} onChange={handleChange}/>
            <button>Add review</button>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    input {
        padding: 3px;
        color: red;
    }
    button {
        align-self: flex-start;
        background-color: brown;
        border: 1px solid brown;
        border-radius: 6px;
        padding: 3px;
        color: skyblue;
        &:hover {
                background-color: orange;
                color: blue;
            }
    }
`
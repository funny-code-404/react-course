import { useContext} from "react"
import { ToDoContext } from "../../Contexts/ToDoContext"
import styled from 'styled-components'

export default function Form(props){
    const context = useContext(ToDoContext)
    context.InitForm()

    return (
        
        <FormStyled className="Form" onSubmit={context.handleCreate}>
            <input name="text" placeholder="Input text" value = {context.inputVal} onChange={context.handleInput}/>
            <button>Create</button>
        </FormStyled>
    )
} 

const FormStyled = styled.form`
    margin: 10px auto;
    max-width: 800px;
    border: 2px solid green;
    border-radius: 7px;
    background-color: rgba(255, 255, 0, 0.4);
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    
    input {
        width: 80%;
        border: 2px solid green;
        padding: 5px;
    }
    button {
        border: 1px solid greenyellow;
        border-radius: 7px;
        padding: 5px;
        background-color: greenyellow;
        color: red;
        &:hover {
            border: 1px solid red;
            background-color: red;
            color: green;
        }
    }


`
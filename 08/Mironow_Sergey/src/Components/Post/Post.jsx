import { useContext } from "react/cjs/react.development"
import { ToDoContext } from "../../Contexts/ToDoContext"
import styled from "styled-components"



export default function Post(props){
    const context = useContext(ToDoContext)
    const handleClick = context.onDelete(props.id)

    return (

        <DivStyled>
            <div>
                <h5>{props.header}</h5>
                <button onClick={handleClick}>Delete</button>
            </div>
            <p>{props.text}</p>
        </DivStyled>

    )
}

const DivStyled = styled.div`
border: 2px solid red;
margin: 5px;
padding: 5px;
    & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h5 {
            color: indianred;
        }
    }
    p {
        color: gray;
        border: 1px solid gray;
        margin: 5px 0;
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
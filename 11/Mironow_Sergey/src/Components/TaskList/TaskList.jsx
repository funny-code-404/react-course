import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { ACTION_TASKS_REQUEST } from "../../ducks/todos"
import { v4 } from "uuid"




export function TaskList (props){
    const dispatch = useDispatch() 
    const tasks = useSelector((state) => state.todos.data)
    
    useEffect(() => {
        dispatch(ACTION_TASKS_REQUEST())
    },[dispatch])

    return (
        <UlStyled>
            {tasks.map((el, i) => (
                <div className="Task" key={v4()}>
                    <h4>{el.title}</h4>
                    <p>{`Completed: ${el.completed}`}</p>
                </div>
                ))}
        </UlStyled>
    )
}

const UlStyled = styled.ul`
   margin: 0 auto;
   max-width: 400px;
   color: crimson;
   background-color: cyan;
   border: 1px solid orange;
   & > div {
        border: 1px solid orange;
       padding: 8px;
       & > *::first-letter {text-transform: capitalize;}
       & > * {
           margin: 7px;
       }
       & > p {color: green}

   }
`
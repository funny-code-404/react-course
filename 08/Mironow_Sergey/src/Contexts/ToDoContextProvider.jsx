import React from "react";
import { ToDoContext } from "./ToDoContext";
import { v4 } from "uuid";


const TODO_LIST = {
    InitForm: function(){
        const [inputVal, setInput] = React.useState('')
        TODO_LIST.inputVal = inputVal
        TODO_LIST.setInput = setInput
        TODO_LIST.handleInput = (event) => {
            setInput(event.target.value)  
        }
        TODO_LIST.handleCreate = (event) => {
            event.preventDefault()
            TODO_LIST.setPosts([...TODO_LIST.posts, {text: TODO_LIST.inputVal, id: v4()}])
            TODO_LIST.setInput('')            

        } 
    },
    InitList: function(){
        const [posts, setPosts] = React.useState([...JSON.parse(localStorage.posts)])
        TODO_LIST.posts = posts
        TODO_LIST.setPosts = setPosts
        TODO_LIST.onDelete = (id) => {
            return (event) => {
                TODO_LIST.setPosts([...TODO_LIST.posts].filter((el) => {
                    return el.id !== id
                }))
            }
        }
    },

}


export const ToDoProvider = (props) => {

    return ( 
            <ToDoContext.Provider value = {TODO_LIST}>
                {React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, {})
                })}
            </ToDoContext.Provider>
            )
}
import { useContext } from "react/cjs/react.development"
import { ToDoContext } from "../../Contexts/ToDoContext"
import styled from "styled-components"
import Post from "../Post/Post"


export default function List(props){

    const context = useContext(ToDoContext)
    context.InitList()
    localStorage.posts = JSON.stringify(context.posts)

    return (
        <DivStyled>{context.posts.map((post, i) => (
            <Post text = {post.text} header = {'Task   ' + (i + 1) + ':'} id = {post.id} key = {post.id}/>
        ))}</DivStyled>
    )
}


const DivStyled = styled.div`
    margin: 0 auto;
    max-width: 800px;
    border: 2px solid green;
    background-color: rgba(255, 255, 0, 0.4);
    display: flex;
    flex-direction: column;
`
import styled from "styled-components"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { ACTION_POSTS_REQUEST } from "../../ducks/posts"
import { v4 } from "uuid"




export function PostList (props){
    const dispatch = useDispatch()
    const data = useSelector((state) => state.posts.data) 
    const posts = useSelector((state) => state.posts)
    
    useEffect(() => {
        dispatch(ACTION_POSTS_REQUEST())
    },[dispatch])
    return (
        <UlStyled>
            {posts.loading && <h2>Loading...</h2>}
            {posts.error && <h2>{`${posts.error}`}</h2>}
            {data.map((el, i) => (
                <div className="Post" key={v4()}>
                    <h4>{el.title}</h4>
                    <p>{el.body}</p>
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
   h2 {padding: 10px}
   & > div {
        border: 1px solid orange;
       padding: 8px;
       & > *::first-letter {text-transform: capitalize;}
       & > * {
           margin: 7px;
       }
   }
`
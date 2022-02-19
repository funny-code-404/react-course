import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { requestComments } from "../../ducks/comments"
import { v4 as uuidv4 } from "uuid"
import { ACTION_GET_COMMENTED_POST } from "../../ducks/posts"



export default function Comments(props){
    const history = useHistory()
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.data)
    const post = useSelector((state) => state.posts.lastSeenPost) || {}

    
    useEffect(() => {
        dispatch(requestComments(history.location.pathname))
        dispatch(ACTION_GET_COMMENTED_POST(history.location.pathname))
    }, [dispatch, history.location.pathname])


    return (
        <DivStyled>
            <div className="post">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
            <div className="comments">
                {comments.map((comment) => (
                    <div key={uuidv4()}>
                        <h5>{comment.name}</h5>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </DivStyled>
    )
}



const DivStyled = styled.div`
    margin: 0 auto;
    max-width: 900px;
    border: 3px solid rgb(0, 82, 150);
    background-color: rgba(0, 82, 150, 0.3);
    padding: 15px;
    h4,h5,p::first-letter {text-transform: capitalize;}
    .post {
        font-size: 18px;
        border: 2px solid brown;
        border-radius: 6px;
        margin-bottom: 20px;
        padding: 15px;
    }
    .comments {
        margin-left: 50px;
        border-left: 3px solid brown;
        & > div {
            border-bottom: 2px dashed brown;
            margin-bottom: 20px;
            padding: 10px;
        }
    }

`
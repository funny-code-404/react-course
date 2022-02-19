
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ACTION_REQUEST_POSTS } from '../../ducks/posts'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'





export function PostList(props){
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(ACTION_REQUEST_POSTS())
    }, [dispatch])

    return (
        <UlStyled>
            {posts.data.map((post) => (
                <li className='post' key={uuidv4()} id={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <Link to={{pathname: `/posts/:${post.id}/comments`, state: {post: post,}}}>See comments</Link>
                </li>
            ))}
        </UlStyled>
    )
}


const UlStyled = styled.ul`
    margin: 0 auto;
    max-width: 900px;
    list-style: none;
    border: 3px solid rgb(0, 82, 150);
    background-color: rgba(0, 82, 150, 0.3);
    padding: 15px;
    li {
        border: 2px solid brown;
        border-radius: 6px;
        margin-bottom: 15px;
        padding: 15px;
        h4,p::first-letter {text-transform: capitalize;}
        a:hover {color: green;}
    }

`
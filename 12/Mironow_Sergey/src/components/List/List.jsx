import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { ACTION_DELETE_REVIEW, ACTION_REQUEST_REVIEWS, ACTION_WRITE_REVIWS } from "../../ducks/reviews/reducer"



export default function Form(props){
    const reviews = useSelector((state) => state.reviews)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ACTION_REQUEST_REVIEWS())
    }, [])

    const handleDelete = (event) => {
        const targetReviewId = event.target.closest('.review').id
        dispatch(ACTION_DELETE_REVIEW(targetReviewId))
    }

    return (
        <UlStyled>
            {reviews.error && <h2 className="error">{reviews.error.message}</h2>}
            {reviews.loading ? <h2 className="loading">Loading...</h2> :reviews.data.map((el) => (
                <div className="review" key={el.id} id={el.id}>
                    <div>
                        <h5>{el.name}</h5>
                        <h6>{el.email}</h6>
                    </div>
                    <p>{el.review}</p>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            ))}
        </UlStyled>
    )
}


const UlStyled = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: brown;
    margin-top: 25px;
    .review {
        background-color: rgba(9, 255, 9, 0.4);
        margin-bottom: 10px;
        border: 1px dashed brown;
        border-radius: 6px;
        padding: 5px;
        & > div {
            display: flex;
            justify-content: space-between;     
            border-bottom: 1px solid brown;
            align-items: baseline;
        }
        & > button {
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
        h5,h5,p {
            padding: 4px;
        }


    }

`
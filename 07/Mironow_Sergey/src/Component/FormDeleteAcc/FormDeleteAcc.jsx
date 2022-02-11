import React from "react"
import {useState} from 'react'
import styled from "styled-components"

function FormDeleteAcc(props){
    const {name, mail, password} = props
    const [reviewText, useReviewText] = useState('')
    const [radio, useRadio] = useState(5)

    const HandleTextareaChange = (event) => useReviewText(event.target.value)
    const HandleRadio = (event) => useRadio(event.target.value)

    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log({name, mail, password, reviewText: reviewText, rate: radio })
        props.ClearInputs()
    }
    

    return (
        <FormStyled className="FormRegister" onSubmit={HandleSubmit}>
            <h3>Delete Account:</h3>
            <textarea placeholder="Review " name="reviewText" value={reviewText} onChange={HandleTextareaChange}></textarea>
            <div>
                <p>Rate the application:</p>
                <div className="rate">
                    <input type="radio" id="rate1" name="rate" value="1" onChange={HandleRadio}/>
                    <label>1</label>
                </div>
                <div className="rate">
                    <input type="radio" id="rate2" name="rate" value="2" onChange={HandleRadio}/>
                    <label>2</label>
                </div>
                <div className="rate">
                    <input type="radio" id="rate3" name="rate" value="3" onChange={HandleRadio}/>
                    <label>3</label>
                </div>
                <div className="rate">
                    <input type="radio" id="rate4" name="rate" value="4" onChange={HandleRadio}/>
                    <label>4</label>
                </div>
                <div className="rate">
                    <input type="radio" id="rate5" name="rate" value="5" onChange={HandleRadio}/>
                    <label>5</label>
                </div>


            </div>

            <button disabled = {!(name && mail && password)} onSubmit={HandleSubmit}>Send</button>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    & > div {
        display: flex;
        margin: 5px 0;
        & > p {
            width: 30%;
        }
        & > div {
            display: flex;
            flex-direction: column;
            padding: 6px 3px 6px 3px;
        }
    }
    button {
        margin: 5px 0;
        color: brown;
        background-color: rgb(230, 230, 250);
    }

`



export default FormDeleteAcc
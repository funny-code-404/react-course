import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export const HEADERS = [{name: 'Posts', path: '/posts', }, {name: 'Tasks', path: '/todos'},]




export function Header(props){
    const [header, setHeader] = useState(HEADERS[0])
    const history = useHistory()

    const handleClick = (event) => {
        const path = history.location.pathname
        const shift = event.target.classList.contains('left') ? -1 : event.target.classList.contains('right') ? 1 : 0     
        HEADERS.forEach((el, i) => {
            if (el.path === path){
                let pos = i + shift
                if (pos < 0){
                    history.push(HEADERS[HEADERS.length - 1].path)
                    setHeader(HEADERS[HEADERS.length - 1])
                }else if (pos === HEADERS.length){
                    history.push(HEADERS[0].path)
                    setHeader(HEADERS[0])
                }else{
                    history.push(HEADERS[pos].path)
                    setHeader(HEADERS[pos])
                }
                
            }
        })
    
    }

    return (
        <DivStyled>
            <div className="arrowBtnWrapper left" onClick={handleClick}><div className="arrowBtn left"></div></div>
            <h2>{header.name}</h2>
            <div className="arrowBtnWrapper right" onClick={handleClick}><div className="arrowBtn right"></div></div>
        </DivStyled>
    )
}




const DivStyled = styled.div`
    margin: 0 auto;
    max-width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    padding: 15px;
    color: crimson;
    background-color: cyan;
    border: 4px solid green;
    h2 {
        width:45%;
        text-align: center;

    }
    .arrowBtn {
        width: 15px;
        height: 15px;
        border-bottom: 2px solid black;
        border-left: 2px solid black;
    }
    .arrowBtnWrapper {padding:5px;}
    .arrowBtn.left {transform: rotate(45deg)}
    .arrowBtn.right {transform: rotate(-135deg)}
`
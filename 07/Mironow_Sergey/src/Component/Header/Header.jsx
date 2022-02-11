import { NavLink } from "react-router-dom";
import styled from "styled-components";


export default function Header(props){
    return (
        <DivStyled >
            <NavLink to = '/register' >Register</NavLink>
            <NavLink to = '/login' >Login</NavLink>
            <NavLink to = '/deleteacc' >Delete</NavLink>
        </DivStyled>
    )
}

const DivStyled = styled.div`
    
    display: flex;
    justify-content: center;
    background-color: antiquewhite;
    border: 1px solid brown;
    a {
        color: brown;
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        text-align: center;
        padding: 15px 0;
        width: 33%;
        &:first-child {
            border-right: 1px solid brown;
        }
        &:nth-child(2) {
            border-right: 1px solid brown;
        }
        &:hover {
            text-decoration: underline;
            color: rgb(88, 0, 18);
        }
    }


`
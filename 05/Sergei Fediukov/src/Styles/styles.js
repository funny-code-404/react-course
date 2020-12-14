import styled from 'styled-components'

export const StyledButton = styled.button`
margin: 5px;
color: firebrick;
border: none;
border-radius: 5px;
background-color: #fff;
cursor: pointer;
outline: none;
border: 1px solid firebrick;

&:hover{
    background-color: #ffe1e1;
    border: 1px solid white;
}
`
export const StyledDiv = styled.div`
&& ul{
    columns: 110px 7
}

&&  {
    display: block;
    padding: 5px;
}
`

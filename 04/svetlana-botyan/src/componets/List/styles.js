import styled from 'styled-components'

export const Wrapper = styled.div`
width: 40%;
height: 100vh;
padding: 15px;
overflow-y: auto;

&>div{
    border-bottom: 1px solid gray;
    cursor: pointer;

    &:hover{
            background-color: RGB(242, 109, 33);
        }   

    h2{
        color:blue;
        margin: 0;
        padding: 1rem 0;
        font-size: 16px;
        text-transform: uppercase;           
    }
    p{
        margin: 0; 
        padding: 0 0 1rem 0; 
    }
}
`;

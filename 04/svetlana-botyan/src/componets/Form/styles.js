import styled from 'styled-components'

export const FormContainer = styled.form`
label{
    font-size: 16px;
    width: 30%;
    display: flex;
    flex-direction:column;

    input{
    padding:5px;}

    & span{   
    margin: 3px 0;
    padding: 5px;
    width:50%;
    color:red;
    border: red solid 2px;
    border-radius: 5px;
    }  

    & span:last-child{ 
    color:orange;
    border: orange solid 2px;
    } 

    p{
        margin:0;
    }    
}




`;

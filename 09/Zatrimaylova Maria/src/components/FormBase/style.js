import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 20px; 
    padding: 30px 20px;
    max-width: 400px;
    max-height: 900px;
    margin: 0 auto;
`;

export const StyledFormBase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    max-width: 350px;
    height: 150px; 
`;

export const StyledVariablePart = styled.div`
    height: 250px;
    display: flex;
    margin: auto;
`;

export const StyledInput = styled.input`
    outline: none;
    width: 300px;
    height: 30px;
    margin: 0 auto;
`;
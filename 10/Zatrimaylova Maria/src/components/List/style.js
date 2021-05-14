import styled from 'styled-components';

export const ListContainer = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    padding: 15px;
    display: flex;
    border: 1px solid  ${props => props.selected ? 'darkgray' : 'white'};
    border-radius: 20px;
    margin: 20px 0;
    background-color: ${props => props.selected ? 'gray' : 'none'};
    color: ${props => props.selected ? 'white' : 'black'};

    p {
        display: ${props => props.selected ? 'block' : 'none'};
        margin-top: 5px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    padding: 5px;
    border: none;
    margin-right: 20px;
`;

export const TextItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;
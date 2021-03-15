import styled, { css } from 'styled-components';

export const Ul = styled.ul`
    padding: 0;
    display: flex;
    justify-content: center;
`;

export const Li = styled.li`
    list-style-type: none;
    padding: 10px 10px 0;
    border: 2px solid green;
    border-right: none;

    ${props => props.lastItem && css`
    border-right: 2px solid green;
  `};
`;

export const Img = styled.img`
    align: center;
`;

export const Div = styled.div`
    ${props => props.container && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    `};
`;
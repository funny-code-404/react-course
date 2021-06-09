import styled from 'styled-components';

export const CarInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NameProp = styled.span`
    font-weight: 600;
`;

export const Nav = styled.nav`
    font-weight: 600;
    color: red;
    text-align: center;
    background-color: rgb(230, 230, 230);
    a {
        text-decoration: none;
        color: rgb(64, 64, 64);
    }
`;

export const BrandList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CarName = styled.p`
    padding: 5px;
    margin-right: 10px;
    border: 2px solid gray;
    border-radius: 3px;

    &:hover {
        transform: scale(1.2);
        color: white;
        background-color: gray;
    }
`;

export const ErrorHeader = styled.h1`
    text-align: center;
`

import styled from 'styled-components';

const Item = styled.div`
    background-color: antiquewhite;
    margin: 20px;
    padding: 15px;
`;

const Pop = styled.button`
    width: 50px;
    border: none;
    outline: none;
    background-color: antiquewhite;
`;

const CatsPreview = styled.div`
display: flex;
justify-content: space-between;
`;

const HiddenInfo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    padding-bottom: 15px; 
`;

const Image = styled.img`
    width: 100%;
`;

const CatsInfo = styled.div`
    width: 45%;
`;

const Span = styled.span`
    font-weight: bold;
`;

export { Item, CatsPreview, Pop, HiddenInfo, CatsInfo, Image, Span };
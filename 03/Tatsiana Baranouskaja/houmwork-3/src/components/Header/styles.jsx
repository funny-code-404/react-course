import styled from 'styled-components';


const RED = 'red';

export const HeaderContainer = styled.header`
    background-color: tan;
    padding: 2rem;
    font-size:18px;
    & .wrapper {
        background-color: ${props => props.isPrimary ? 'pink' : 'orang'};
    }
    &:hover {
        background-color: ${RED};
    }
`;

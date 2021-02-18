import styled, { keyframes } from 'styled-components';
import { mainColor } from '../../globalStyle';

const zoomIn = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.7);
    }
`;

const StyledPagination = styled.div`
    position: absolute;
    bottom: 75vh;
    right: 50%;
    transform: translate(50%);
    .pagination {
        display: flex;
        flex-direction: row;
        transition: all 1s;
    }
    .active, .active > a, .active > li {
        transform: scale(1.7);
        color: ${mainColor};
        animation: 0.5s ${zoomIn} linear;
    }
    li {
        list-style: none;
        padding: 0.1rem 0.5rem;
        cursor: pointer;
        
        &: hover {
            a {
                color: ${mainColor};
            }  
        }
    }
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
`;

export { StyledPagination } ; 
import React from 'react';
import styled from 'styled-components';
import { getFontsFragment } from '../../utils/utils';

type Props = {
    title: string,
}

const NotFound = ({title}: Props) => {
    return (
        <StyledNotFound>
            <h1>{ title }</h1>
        </StyledNotFound>
    );
};

const StyledNotFound = styled.div`
    width: 100%;

    & > h1 {
        ${getFontsFragment('lg')}
        text-align: center;
    }
`

export default NotFound;
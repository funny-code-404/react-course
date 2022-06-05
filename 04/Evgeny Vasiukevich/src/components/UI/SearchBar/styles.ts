import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme';
import { getFontsFragment } from '../../../utils/utils';

export const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin-bottom: 120px;
    padding-left: 24px;
    ${getFontsFragment('md')}
    color: ${baseTheme.colors.textColor};
    background: ${baseTheme.colors.generalWhite};
    border: 3px solid ${baseTheme.colors.strokeColor};
    border-radius: 8px;
`
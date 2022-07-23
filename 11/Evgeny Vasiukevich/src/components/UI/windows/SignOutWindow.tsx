import { useRef } from 'react';
import styled from 'styled-components';
import iconSignOut from '../../../assets/icons/navbar/icon-sign-out.svg';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { getFontsFragment } from '../../../utils/utils';

type Props = {
    handleClick: () => void,
    handleCloseClick: () => void,
};

const SignOutWindow = ({ handleClick, handleCloseClick }: Props) => {
    const signOutWindowRef = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(signOutWindowRef, () => handleCloseClick());

    return (
        <StyledSignOutWindow onClick={handleClick} ref={signOutWindowRef} >
            <img src={iconSignOut} alt="sign out" />
            <h4>Sign out</h4>
        </StyledSignOutWindow>
    );
};

const StyledSignOutWindow = styled.div`
    position: absolute;
    bottom: -84px;
    display: flex;
    gap: 16px;
    width: 192px;
    padding: 16px;
    background: ${({ theme }) => theme.colors.generalWhite};
    border: 1px solid #CECECE;
    cursor: pointer;

    & > h4 {
        ${getFontsFragment('md')}
    }
`

export default SignOutWindow;
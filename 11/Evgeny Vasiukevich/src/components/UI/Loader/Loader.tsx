import { memo } from 'react';
import { useSelector } from 'react-redux';
import { DotLoader } from 'react-spinners';
import { ThemeEnum } from '../../../interfaces/styled';
import { themeSelector } from '../../../redux/theme/selectors';
import { darkTheme, lightTheme } from '../../../styles/theme';

const Loader = () => {
    const theme = useSelector(themeSelector);
    const isLightTheme = theme === ThemeEnum.LIGHT;
    const color = isLightTheme ? lightTheme.colors.acceptBlue : darkTheme.colors.acceptBlue;

    return (
        <DotLoader
            color={color}
            size={120}
            speedMultiplier={1}
            cssOverride={{
                left: 'calc(50% - 60px)',
            }}
        />
    );
};

export default memo(Loader);
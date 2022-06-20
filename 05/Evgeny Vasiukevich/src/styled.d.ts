import 'styled-components';
import { TTheme } from './interfaces/styled';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
};
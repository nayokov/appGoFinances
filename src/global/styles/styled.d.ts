import 'styled-components';
import theme from './theme.ts';

declare module 'styled-components'{
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType{
        
    }
}
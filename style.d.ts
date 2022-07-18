import 'styled-components';
import { ColorsTypes, FontSizeTypes } from './src/style/theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorsTypes;
		fontSizes: FontSizeTypes;
	}
}

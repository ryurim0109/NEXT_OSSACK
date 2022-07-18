import { DefaultTheme } from 'styled-components';

const colors = {
	//font
	titleColor: '#111',
	subTitle: '#666',
	blueTitle: '#718AFF',
	blueBanner: '#B9EAFF',
	buttonTitle: '#FFFFFF',
	darkgray1: '#999',
	darkgray2: '#DBDBDB',
	darkgray3: '#CCC',
	darkgray4: '#F5F5F5',
	//main col
	main: '#3E00FF',
	brightMain: 'rgba(62, 0, 255, 0.1)',
	subMain: '#FF5151',
	banner: '#FBD9D9',
};

const fontSizes = {
	titleSize: '24px',
	xxlg: '20px',
	xlg: '18px',
	large: '16px',
	base: '14px',
	small: '12px',
	xs: '10px',
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSizes;

const theme: DefaultTheme = {
	colors,
	fontSizes,
};

export default theme;

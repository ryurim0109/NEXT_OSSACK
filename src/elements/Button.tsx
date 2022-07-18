import React from 'react';
import styled from 'styled-components';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { ReactComponent as Heart } from '../../public/assets/favourite.svg';
import { ReactComponent as Close } from '../../public/assets/close.svg';

const Button = (props: any) => {
	const {
		color,
		_onClick,
		children,
		justifyContent,
		margin,
		width,
		is_right,
		padding,
		backgroundColor,
		height,
		borderRadius,
		top,
		bottom,
		left,
		right,
		hover,
		display,
		is_like,
		fontSize,
		position,
		is_back,
		is_close,
		_disabled,
		fill_like,
		alignItems,
		border,
	} = props;

	const styles = {
		margin,
		width,
		padding,
		position,
		backgroundColor,
		color,
		height,
		borderRadius,
		justifyContent,
		top,
		bottom,
		left,
		right,
		hover,
		display,
		fontSize,
		alignItems,
		border,
	};
	if (is_like) {
		return (
			<React.Fragment>
				<IconBox onClick={_onClick} {...styles}>
					<Heart fill='none' stroke='#fff' />
				</IconBox>
			</React.Fragment>
		);
	}
	if (fill_like) {
		return (
			<React.Fragment>
				<IconBox onClick={_onClick} {...styles}>
					<Heart fill='#fff' stroke='none' />
				</IconBox>
			</React.Fragment>
		);
	}
	if (is_close) {
		return (
			<React.Fragment>
				<IconBox onClick={_onClick} {...styles}>
					<Close fill='none' stroke='#111' />
				</IconBox>
			</React.Fragment>
		);
	}
	if (is_right) {
		return (
			<React.Fragment>
				<IconBox onClick={_onClick} {...styles}>
					<Right />
				</IconBox>
			</React.Fragment>
		);
	}
	if (is_back) {
		return (
			<React.Fragment>
				<IconBox onClick={_onClick} {...styles}>
					<Back />
				</IconBox>
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<ButtonBox {...styles} onClick={_onClick} disabled={_disabled}>
				{children}
			</ButtonBox>
		</React.Fragment>
	);
};

Button.defaultProps = {
	position: null,
	children: null,
	_onClick: () => {},
	isFloat: false,
	margin: null,
	width: '100%',
	padding: null,
	color: null,
	height: '48px',
	top: null,
	bottom: null,
	left: null,
	right: null,
	hover: null,
	display: null,
	justifyContent: null,
	alignItems: false,
	fontSize: null,
	border: null,
};
interface ButtonBoxType {
	margin: string;
	padding: string;
	width: string;
	height: string;
	backgroundColor: string;
	display: string;
	borderRadius: string;
	alignItems: string;
	justifyContent: string;
	border: string;
	hover: string;
	position: string;
	top: string;
	bottom: string;
	left: string;
	right: string;
	fontSize: string;
}
const ButtonBox = styled.button<ButtonBoxType>`
	width: ${(props) => props.width};
	color: ${(props) => props.color};
	padding: ${(props) => props.padding};
	height: ${(props) => props.height};
	font-size: ${(props) => props.fontSize};
	margin: ${(props) => props.margin};
	position: ${(props) => props.position};
	${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')};
	${(props) =>
		props.justifyContent ? `justify-content: ${props.justifyContent};` : ''};
	${(props) =>
		props.backgroundColor
			? `background-color:${props.backgroundColor}`
			: 'background-color: #3E00FF'};
	${(props) => (props.border ? `border: ${props.border};` : 'none')};
	${(props) =>
		props.borderRadius
			? `border-radius:${props.borderRadius}`
			: 'border-radius: 0px'};
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.hover};
	}
	vertical-align: middle;
	top: ${(props) => props.top};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	flex-shrink: 0;
	display: ${(props) => props.display};
`;
interface IconBoxType {
	position: string;
	top: string;
	bottom: string;
	left: string;
	right: string;
	color: string;
}
const IconBox = styled.button<IconBoxType>`
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	position: ${(props) => props.position};
	top: ${(props) => props.top};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	right: ${(props) => props.right};
	color: ${(props) => props.color};
`;
const Back = styled(MdKeyboardArrowLeft)`
	width: 24px;
	height: 24px;
	color: #000;
`;
const Right = styled(MdKeyboardArrowRight)`
	width: 24px;
	height: 24px;
	color: #000;
`;
export default Button;

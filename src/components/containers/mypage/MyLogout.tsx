import React, { useState } from 'react';
import { Button } from '../../../elements/index';
import styled from 'styled-components';
import { LogoutModal } from './index';
import { useRouter } from 'next/router';

const MyLogout = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<React.Fragment>
			<LogoutInner>
				<Button
					border='none'
					width='49px'
					fontSize='14px'
					color='#999'
					backgroundColor='none'
					_onClick={openModalHandler}>
					로그아웃
				</Button>
				<Button
					border='none'
					width='49px'
					fontSize='14px'
					color='#999'
					backgroundColor='none'
					_onClick={() => {
						router.push('/mypage/withdraw');
					}}>
					회원탈퇴
				</Button>
			</LogoutInner>
			{isOpen ? (
				<>
					<ModalBackdrop onClick={openModalHandler}></ModalBackdrop>
					<LogoutModal isOpen={isOpen} setIsOpen={setIsOpen} />
				</>
			) : null}
		</React.Fragment>
	);
};
const LogoutInner = styled.div`
	width: 100%;
	height: 22px;
	display: flex;
	padding: 0 107px;
	margin-top: 100px;
	align-items: center;
	justify-content: space-between;
	position: relative;

	& ::before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1px;
		height: 12px;
		background-color: ${({ theme }) => theme.colors.darkgray1};
	}
`;
const ModalBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	z-index: 999;
	justify-content: center;
	align-items: center;
	background: rgba(153, 153, 153, 0.77);
`;

export default MyLogout;

import React, { useState } from 'react';

import { Text, Button } from '../src/elements';

import TalkTalk from '../src/components/shared/TalkTalk';
import styled from 'styled-components';
import useText from '../hooks/useText';
import { actionCreators as userActions } from '../store/redux/user';
import { useDispatch } from 'react-redux';

const Login = () => {
	const dispatch = useDispatch();

	const [userEmail, setUserEmail] = useText();
	const [userPassword, setUserPassword] = useText();
	// const [isActive, setIsActive] = useState(false);

	// const isPassedLogin = () => {
	// 	return userEmail.includes('@') && password.length >= 5
	// 		? setIsActive(true)
	// 		: setIsActive(false);
	// };

	const loginClick = () => {
		dispatch(userActions.setUser.request(userEmail, userPassword));
	};

	return (
		<React.Fragment>
			<Outter>
				<InnerText>
					<Text bold color='#3E00FF'>
						오싹
					</Text>{' '}
					서비스 이용을 위해
					<br /> 로그인 해주세요.
				</InnerText>
				<InnerInputBox>
					<input
						placeholder='이메일을 입력해주세요.'
						type='text'
						name='useremail'
						id='useremail'
						onChange={setUserEmail as any}
					/>
					<input
						placeholder='비밀번호를 입력해주세요.'
						type='text'
						name='userpassword'
						id='userpassword'
						onChange={setUserPassword as any}
					/>
					<button onClick={loginClick}>로그인</button>
				</InnerInputBox>
				{/* 소셜로그인 */}
				<TalkTalk />
			</Outter>
		</React.Fragment>
	);
};
const Outter = styled.div`
	width: 100%;
	height: 465px;
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;
const InnerText = styled.div`
	width: 100%;
	height: 66px;
	font-size: ${({ theme }) => theme.fontSizes.titleSize};
	color: ${({ theme }) => theme.colors.title};
	font-weight: bold;
	padding: 72px 0 68px 0;
`;
const InnerInputBox = styled.div`
	width: 100%;
	height: 187px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	& > input {
		width: 100%;
		height: 50px;
		padding: 14px 16px;
		border: 1px solid #c4c4c4;
		border-radius: 8px;
	}
	& > input:focus {
		outline: none;
		color: ${({ theme }) => theme.colors.main};
		border: 1px solid ${({ theme }) => theme.colors.main};
	}
	& > button {
		width: 100%;
		height: 50px;
		background-color: ${({ theme }) => theme.colors.main};
		color: ${({ theme }) => theme.colors.buttonTitle};
		font-weight: bold;
		border-radius: 8px;
	}
`;
export default Login;

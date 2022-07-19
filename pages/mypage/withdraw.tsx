import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid, Text } from '../../src/elements/index';
//import { actionCreators as userActions } from "../redux/modules/user";
import { MyHeader, Bar } from '../../src/components/shared/index';
import { useSelector } from 'react-redux';

const WithDraw = () => {
	// useEffect(() => {
	//   appDispatch(loginCheckApi());
	// }, []);
	//const user_info = useSelector((:RootState) => state.user.user);
	const [isChecked, setIsChecked] = useState(false);
	const handleChecked = () => {
		if (isChecked === false) {
			setIsChecked(true);
		} else {
			setIsChecked(false);
		}
	};
	return (
		<React.Fragment>
			<MyHeader is_back>회원 탈퇴</MyHeader>
			<Outter>
				<Section>
					<Grid margin='20px 0'>
						<Text size='20px' bold>
							{/* {user_info?.nickname}님, */}
							게스트님
						</Text>
						<P>오싹 서비스 탈퇴 전에 확인해주세요.</P>
					</Grid>
				</Section>
				<Grid width='100%' height='250px' bg='#FAFAFA' padding='32px 16px'>
					<Text bold size='16px'>
						오싹 서비스를 탈퇴하면
					</Text>
					<Grid
						width='100%'
						height='151px'
						margin='16px 0'
						display='flex'
						flexDirection='column'
						justifyContent='space-between'>
						<Gray>
							• 서비스 탈퇴 시{' '}
							<Text color='#3E00FF'>회원 전용 서비스 이용이 불가</Text>하며,
							회원 데이터는 일괄 삭제 처리 됩니다.
						</Gray>
						<Gray>
							• 서비스 탈퇴 신청 후 서비스가 탈퇴가 완료되면 해당 계정에 대한{' '}
							<Text color='#3E00FF'>모든 정보는 삭제되며 복원이 불가능</Text>한
							점 참고 부탁드립니다.
						</Gray>
						<Gray>
							• 소셜 로그인 회원의 경우, 오싹의 모든 정보가 삭제되며 같은 소셜
							아이디로 <Text color='#3E00FF'>재가입 시 신규 회원</Text>으로
							가입됩니다.
						</Gray>
					</Grid>
					<Grid
						width='100%'
						margin='64px 0 32px 0'
						height='24px'
						display='flex'
						alignItems='center'>
						<Grid
							width='18px'
							margin=' 0 5px 0 0'
							display='flex'
							alignItems='center'>
							<input
								id='check'
								type='checkbox'
								checked={isChecked}
								onChange={handleChecked}
							/>
						</Grid>
						<label htmlFor='check'>
							<Text size='14px'>
								위 내용을 모두 확인하였으며, 이에 동의합니다.
							</Text>
						</label>
					</Grid>
					<Btn
						disabled={!isChecked}
						onClick={() => {
							//appDispatch(resignDB());
						}}>
						계정 영구삭제
					</Btn>
				</Grid>
			</Outter>
			<Bar />
		</React.Fragment>
	);
};
const Outter = styled.div`
	position: relative;
	top: 80px;
`;
const Section = styled.div`
	width: 100%;
	padding: 0 16px;
`;
const P = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.large};
	color: ${({ theme }) => theme.colors.title};
	margin-top: 5px;
`;
const Gray = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.base};
	color: ${({ theme }) => theme.colors.subTitle};
`;
const Btn = styled.button`
	width: 100%;
	height: 48px;
	background-color: ${(props) => (props.disabled ? '#DBDBDB' : '#3E00FF')};
	color: #fff;
	border-radius: 8px;
`;
export default WithDraw;

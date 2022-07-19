import React from 'react';
import { MyHeader, Bar } from '../../src/components/shared/index';
import styled from 'styled-components';
//멤버 이미지
import member1 from '../assets/member1.png';
import member2 from '../assets/member2.png';
import member3 from '../assets/member3.png';
import member4 from '../assets/member4.png';
import member5 from '../assets/member5.png';
import member6 from '../assets/member6.png';
import member7 from '../assets/member7.png';
import member8 from '../assets/member8.png';
import member9 from '../assets/member9.png';
import { useSelector } from 'react-redux';

import { Grid, Image, Text } from '../../src/elements/index';

const Member = () => {
	// const login = useSelector((state) => state.user.is_login);
	// const is_session = localStorage.getItem("token");

	// if (!login || !is_session) {
	//   return (
	//     <React.Fragment>
	//       <NotUser />
	//     </React.Fragment>
	//   );
	// } else {
	return (
		<React.Fragment>
			<MyHeader is_my>오싹 팀원소개</MyHeader>
			<Outter>
				{/* 팀원소개 민우 */}
				<Left
					onClick={() => {
						window.open('https://github.com/Littlecold4', '_blank');
					}}>
					<Grid width='120px' height='120px' cursor='pointer'>
						<Image src={member1} shape='rectangle' />
					</Grid>
					<LeftContent>
						<Inner>
							<Grid cursor='pointer'>
								<Text bold>미누 : 백엔드 개발자</Text>
							</Grid>
							<Grid cursor='pointer'>
								<p>개발이 나, 내가 곧 개발이다.</p>
								<p>개발에 죽고 못 사는 사람🧑‍💻</p>
							</Grid>
						</Inner>
					</LeftContent>
				</Left>
				{/* 팀원소개 다빈 */}
				<Right
					onClick={() => {
						window.open('https://github.com/chIorophyII', '_blank');
					}}>
					<RightContent>
						<Inner>
							<Grid cursor='pointer'>
								<Text bold>다콩 : 백엔드 개발자</Text>
							</Grid>
							<Grid cursor='pointer'>
								<p>왜들 그리 서버다운 돼있어,</p>
								<p>뭐가 오류야 세이 썸띵 🤷‍♀️</p>
							</Grid>
						</Inner>
					</RightContent>
					<Grid width='120px' height='120px' cursor='pointer'>
						<Image src={member2} shape='rectangle' />
					</Grid>
				</Right>
				{/* 팀원소개 수민 */}
				<Left
					onClick={() => {
						window.open('https://github.com/sumye', '_blank');
					}}>
					<Grid width='120px' height='120px' cursor='pointer'>
						<Image src={member3} shape='rectangle' />
					</Grid>
					<LeftContent>
						<Inner>
							<Grid cursor='pointer'>
								<Text bold>쑤마 : 백엔드 개발자</Text>
							</Grid>
							<Grid cursor='pointer'>
								<p>다이어트가 너무 힘든 애견인🐶</p>
								<p>강아지 이름은 아추!</p>
							</Grid>
						</Inner>
					</LeftContent>
				</Left>
				{/* 팀원소개 유림 */}
				<Right
					onClick={() => {
						window.open('https://github.com/ryurim0109', '_blank');
					}}>
					<RightContent>
						<Inner>
							<Grid cursor='pointer'>
								<Text bold>유짱 : 프론트엔드 개발자</Text>
							</Grid>
							<Grid cursor='pointer'>
								<p>귀엽다면 뭐든 오케이</p>
								<p>제일 좋아하는 캐릭터는 알린😍</p>
							</Grid>
						</Inner>
					</RightContent>
					<Grid width='120px' height='120px' cursor='pointer'>
						<Image src={member4} shape='rectangle' />
					</Grid>
				</Right>
				{/* 팀원소개 태순 */}
				<Left
					onClick={() => {
						window.open('https://github.com/devkevinsoon', '_blank');
					}}>
					<Grid width='120px' height='120px' cursor='pointer'>
						<Image src={member5} shape='rectangle' />
					</Grid>
					<LeftContent>
						<Inner>
							<Grid cursor='pointer'>
								<Text bold>SOON : 프론트엔드 개발자</Text>
							</Grid>
							<Grid cursor='pointer'>
								<p>이상을 실현하는 과정은</p>
								<p>언제나 두근거려요~(진지😆)</p>
							</Grid>
						</Inner>
					</LeftContent>
				</Left>
				{/* 팀원소개 지영 */}
				<Right>
					<RightContent>
						<Inner>
							<Grid>
								<Text bold>져니 : UXUI 디자이너</Text>
							</Grid>
							<Grid>
								<p>9개월차 UI 디자이너🎨</p>
							</Grid>
						</Inner>
					</RightContent>
					<Grid width='120px' height='120px'>
						<Image src={member6} shape='rectangle' />
					</Grid>
				</Right>
				{/* 팀원소개 지혜 */}
				<Left>
					<Grid width='120px' height='120px'>
						<Image src={member7} shape='rectangle' />
					</Grid>
					<LeftContent>
						<Inner>
							<Grid>
								<Text bold>졔졔 : UXUI 디자이너</Text>
							</Grid>
							<Grid>
								<p>내 심장의 색깔은 퍼플</p>
								<p>잠만보가 되고싶은 어른이</p>
							</Grid>
						</Inner>
					</LeftContent>
				</Left>
				{/* 팀원소개 오 */}
				<Right>
					<RightContent>
						<Inner>
							<Grid>
								<Text bold>오피 : 오싹 마스코트</Text>
							</Grid>
							<Grid>
								<p>오싹에서 귀여움을 담당</p>
								<p>오피스를 찾으러 항상 뛰어다님</p>
							</Grid>
						</Inner>
					</RightContent>
					<Grid width='120px' height='120px'>
						<Image src={member8} shape='rectangle' />
					</Grid>
				</Right>
				{/* 팀원소개 싹 */}
				<Left>
					<Grid width='120px' height='120px'>
						<Image src={member9} shape='rectangle' />
					</Grid>
					<LeftContent>
						<Inner>
							<Grid>
								<Text bold>싹이 : 오싹 마스코트</Text>
							</Grid>
							<Grid>
								<p>오피를 따라다니다,</p>
								<p>지쳐서 눈이 항상 피곤한 싹이</p>
							</Grid>
						</Inner>
					</LeftContent>
				</Left>
			</Outter>
			<Bar />
		</React.Fragment>
	);
	// }
};
const Outter = styled.div`
	width: 100%;
	padding-bottom: 90px;
	position: relative;
	top: 80px;
`;
const Left = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	& p {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.subTitle};
	}
`;
const LeftContent = styled.div`
	width: 70%;
	height: 120px;
	padding-left: 20px;
	display: flex;
	align-items: center;
`;
const Inner = styled.div`
	width: 100%;
	height: 72px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Right = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	padding-left: 25%;
	& p {
		font-size: ${({ theme }) => theme.fontSizes.base};
		color: ${({ theme }) => theme.colors.subTitle};
	}
`;
const RightContent = styled.div`
	width: 70%;
	height: 120px;
	display: flex;
	align-items: center;
`;
export default Member;

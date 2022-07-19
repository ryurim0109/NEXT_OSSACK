import React, { useState } from 'react';
import styled from 'styled-components';
import { MyHeader, Bar } from '../../src/components/shared/index';
import { Grid, Image, Button, Text } from '../../src/elements/index';
import ProEdit from '../../public/assets/pro_edit.svg';
import { nickNameRegex } from '../../src/shared/regCheck';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { useRouter } from 'next/router';
import { actionCreators as userActions } from '../../store/redux/user';

const EditProfile = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const user_Info = useSelector((state: RootState) => state.user.user);
	const [image, setImage] = useState<any>('');
	const [preview, setPreview] = useState();
	const [nickname, setNickname] = useState<any>(user_Info?.nickname);
	// const login = useSelector((state:RootState) => state.user.is_login);
	// const is_session = localStorage.getItem("token");
	//사진 미리보기
	const encodeFileToBase64 = (fileBlob: any) => {
		const reader = new FileReader();

		reader.readAsDataURL(fileBlob);

		return new Promise((resolve: any) => {
			reader.onload = () => {
				setPreview(reader.result as any);
				resolve();
			};
		});
	};
	const changeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNickname(e.target.value);
	};
	const editProfile = () => {
		let maxSize = 3 * 1024 * 1024;
		let fileSize = image.size;
		if (fileSize > maxSize) {
			window.alert('첨부파일 사이즈는 3MB 이내로 등록 가능합니다.');
			return;
		}
		if (!nickNameRegex(nickname)) {
			window.alert('닉네임은 2글자 이상10글자 이하여야 됩니다.');
			return;
		}
		if (!nickname) {
			const userInfo = {
				nickname: user_Info.nickname,
				image: image,
				userimg: user_Info.imageUrl,
			};
			dispatch(userActions.user_img.request(userInfo));
		} else {
			const userInfo = {
				nickname: nickname,
				image: image,
				userimg: user_Info.imageUrl,
			};
			dispatch(userActions.user_img.request(userInfo));
		}
		router.push('/mypage');
	};
	const ImgDelete = () => {
		if (!nickname) {
			dispatch(userActions.del_img.request(user_Info.nickname));
		} else {
			dispatch(userActions.del_img.request(nickname));
		}
		router.push('/mypage');
	};

	// if (!login || !is_session) {
	//   return (
	//     <React.Fragment>
	//       <NotUser />
	//     </React.Fragment>
	//   );
	// } else {
	return (
		<React.Fragment>
			<MyHeader is_my>프로필 변경</MyHeader>
			<Outter>
				<Grid
					width='100%'
					margin='40px 0 0'
					height='154px'
					position='relative'
					display='flex'
					flexDirection='column'
					alignItems='start'
					justifyContent='center'>
					{/* 프로필 이미지 부분 */}
					<Grid
						width='100%'
						display='flex'
						justifyContent='center'
						position='relative'
						height='112px'>
						<Image
							border='2px solid #F3F3F3'
							type='circle'
							size='112'
							src={
								preview
									? preview
									: user_Info?.imageUrl
									? user_Info?.imageUrl
									: '/assets/default.png'
							}
						/>
						<label htmlFor='file_input' className='upload-box'>
							<ProEdit />
						</label>
					</Grid>
					<input
						type='file'
						id='file_input'
						accept='image/jpeg, image/png, image/jpg'
						onChange={(e: any) => {
							encodeFileToBase64(e.target.files[0]);
							setImage(e.target.files[0]);
						}}
						style={{ display: 'none' }}
					/>
				</Grid>
				{/* 닉네임 */}
				<Grid
					width='100%'
					height='76px'
					display='flex'
					flexDirection='column'
					alignItems='start'
					justifyContent='space-between'
					padding='0 16px'>
					<Grid height='28px' display='flex' alignItems='center'>
						<Text size='16px' bold>
							닉네임{' '}
						</Text>
						<Text size='12px' color='#666'>
							(2글자 ~ 10글자내의 영어, 한글로만 정해주세요)
						</Text>
					</Grid>
					<NickInput
						onChange={changeNickname}
						defaultValue={user_Info?.nickname}
						type='text'
					/>
				</Grid>
				{/* 사진삭제 완료 버튼 */}
				<Grid
					width='100%'
					height='94px'
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='space-between'
					padding='0 16px'>
					<Text
						bold
						color='#3E00FF'
						borderBottom='1px solid #3E00FF'
						cursor='pointer'
						_onClick={ImgDelete}>
						이미지 삭제
					</Text>
					<Button color='#fff' borderRadius='8px' _onClick={editProfile}>
						완료
					</Button>
				</Grid>
			</Outter>
			<Bar />
		</React.Fragment>
	);
	// }
};
const Outter = styled.div`
	width: 100%;
	height: 550px;
	position: relative;
	top: 62px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 70px;

	& label {
		position: absolute;
		width: 28px;
		height: 28px;
		bottom: 0;
		background: ${({ theme }) => theme.colors.subTitle};
		border-radius: 28px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		right: 35%;
	}
`;
interface NickInputType {
	defaultValue: any;
}
const NickInput = styled.input<NickInputType>`
	width: 100%;
	height: 48px;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.darkgray3};
	padding: 0 16px;
	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.main};
	}
`;
export default EditProfile;

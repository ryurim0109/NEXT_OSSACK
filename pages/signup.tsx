import React, { useState } from 'react';
import {
	Button,
	CssBaseline,
	TextField,
	FormControl,
	FormHelperText,
	Grid,
	Box,
	Container,
} from '@mui/material/';
import styled from 'styled-components';
import { Text } from '../src/elements/index';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import {
	emailRegex,
	passwordRegex,
	nickNameRegex,
} from '../src/shared/regCheck';
import { actionCreators as userActions } from '../store/redux/user';
import { useDispatch } from 'react-redux';
// import Swal from "sweetalert2";
import { RootState } from '../store/index';
import { useRouter } from 'next/router';

const Signup = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [emailError, setEmailError] = useState('');
	const [passwordState, setPasswordState] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [nickNameError, setNickNameError] = useState('');
	const [signupError, setSignupError] = useState('');

	// 중복체크
	const [userEmailCurrent, setUserEmailCurrent] = useState(false);
	// 리덕스에서 statusCode 가져오기
	//const emailDup = useSelector((state) => state.user.statusCode);
	// 비활성화 여부
	const [userEmail, setUserEmail] = useState('');
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');
	const [isActive, setIsActive] = useState(false);

	const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserEmail(event.target.value);
		const userEmailCurrent = event.target.value;
		setUserEmailCurrent(true);
	};

	const handleNickInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNickname(event.target.value);
	};

	const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleCheckPWDInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCheckPassword(event.target.value);
	};

	const isPassedSignup = () => {
		// if (typeof emailDup === "undefined") {
		//   console.log("emailDup : ", emailDup);
		//   setEmailError("이메일 중복확인을 해주세요(🔐)");
		// }
		return userEmail.includes('@') &&
			password.length >= 5 &&
			checkPassword.length >= 5 &&
			nickname.length >= 1
			? setIsActive(true)
			: setIsActive(false);
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const joinData = {
			userEmail: data.get('userEmail'),
			nickname: data.get('nickname'),
			password: data.get('password'),
			passwordCheck: data.get('passwordCheck'),
		};
		const { userEmail, nickname, password, passwordCheck } = joinData;

		if (!emailRegex(userEmail)) setEmailError('올바른 이메일 형식이 아닙니다.');
		else setEmailError('');

		if (!passwordRegex(password))
			setPasswordState(
				'숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
			);
		else setPasswordState('');

		if (password !== passwordCheck)
			setPasswordError('비밀번호가 일치하지 않습니다.');
		else setPasswordError('');

		if (!nickNameRegex(nickname))
			setNickNameError('올바른 이름을 입력해주세요.(글자수 제한 2~10자리)');
		else setNickNameError('');

		// if (!emailDup) {
		//   Swal.fire({
		//     title: "이메일 중복 확인을 해주세요!(🔐)",
		//     showCancelButton: false,
		//     confirmButtonText: "확인",
		//     confirmButtonColor: "#FF5151",
		//   });
		//   return;
		// }

		if (
			emailRegex(userEmail) &&
			passwordRegex(password) &&
			password === passwordCheck &&
			nickNameRegex(nickname)
			// nickNameRegex(nickname) &&
			// emailDup === true
		) {
			dispatch(userActions.signUp.request(joinData));
		}
	};

	// const checkDup = () => {
	//   if (typeof emailDup === "undefined") {
	//     setEmailError("이메일 중복확인을 해주세요(🔐)");
	//   }
	//   setEmailError("");
	//   userEmail.includes("@") &&
	//   password.length >= 5 &&
	//   checkPassword.length >= 5 &&
	//   nickname.length >= 1
	//     ? setIsActive(true)
	//     : setIsActive(false);

	//   dispatch(userActions.userEmailCheckDB(userEmail));
	//   setEmailError("");
	// };

	const style = {
		'& label.Mui-focused': {
			color: '#3E00FF',
		},
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#3E00FF',
			},
		},
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 10,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}>
				<BackBtn
					onClick={() => {
						router.push('/login');
					}}>
					<MdKeyboardArrowLeft fontSize='28' />
				</BackBtn>
				<Grid>
					<Text size='1.250rem' bold>
						<Text color='#3E00FF' bold>
							오싹
						</Text>{' '}
						서비스 이용을 위해 <br />
						회원가입을 해주세요.
					</Text>
				</Grid>
				<Boxs component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<FormControl component='fieldset' variant='standard'>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoFocus
									fullWidth
									type='email'
									id='userEmail'
									name='userEmail'
									label='이메일'
									error={emailError !== '' || false}
									sx={style}
									onChange={handleEmailInput}
									onKeyUp={isPassedSignup}
									size={'small'}
								/>
							</Grid>
							<FormHelperTexts>{emailError}</FormHelperTexts>
							<Grid item xs={12}>
								<TextField
									fullWidth
									id='nickname'
									name='nickname'
									label='닉네임'
									error={nickNameError !== '' || false}
									sx={style}
									onChange={handleNickInput}
									onKeyUp={isPassedSignup}
									size={'small'}
								/>
							</Grid>
							<FormHelperTexts>{nickNameError}</FormHelperTexts>
							<Grid item xs={12}>
								<TextField
									fullWidth
									type='password'
									id='password'
									name='password'
									label='비밀번호 (숫자+영문자+특수문자 8자리 이상)'
									error={passwordState !== '' || false}
									sx={style}
									onChange={handlePasswordInput}
									onKeyUp={isPassedSignup}
									size={'small'}
								/>
							</Grid>
							<FormHelperTexts>{passwordState}</FormHelperTexts>
							<Grid item xs={12}>
								<TextField
									fullWidth
									type='password'
									id='passwordCheck'
									name='passwordCheck'
									label='비밀번호확인'
									error={passwordError !== '' || false}
									sx={style}
									onChange={handleCheckPWDInput}
									onKeyUp={isPassedSignup}
									size={'small'}
								/>
							</Grid>
							<FormHelperTexts>{passwordError}</FormHelperTexts>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							size='large'
							style={
								isActive
									? { backgroundColor: '#3E00FF' }
									: { backgroundColor: '#D5D8DB' }
							}
							disabled={userEmail === '' || password === '' ? true : false}>
							회원가입
						</Button>
					</FormControl>
					<FormHelperTexts>{signupError}</FormHelperTexts>
				</Boxs>
			</Box>
		</Container>
	);
};

const FormHelperTexts = styled(FormHelperText)`
	width: 100%;
	padding-left: 16px;
	font-weight: 700;
	color: #d32f2f;
`;
interface BoxsType {
	onSubmit: any;
}
const Boxs = styled(Box)<BoxsType>`
	padding-bottom: 40px;
`;
const BackBtn = styled(Box)`
	width: 28px;
	height: 28px;
	position: absolute;
	top: 16px;
	left: 16px;
	cursor: pointer;
`;
export default Signup;

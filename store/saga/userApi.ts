import { instance } from '../../src/shared/api';

export const requestUserInfo = async ({
	userEmail,
	nickname,
	password,
}: any) => {
	const { data } = await instance.post('/user/signup', {
		userEmail: userEmail,
		nickname: nickname,
		password: password,
	});

	return { user: data };
};
export const requestLoginInfo = async ({ userEmail, password }: any) => {
	const { data } = await instance.post('/user/login', {
		userEmail: userEmail,
		password: password,
	});
	const token = data.headers.authorization.split('BEARER ');
	localStorage.setItem('token', token[1]);
	return { user: data };
};

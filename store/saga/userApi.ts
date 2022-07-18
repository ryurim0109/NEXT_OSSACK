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

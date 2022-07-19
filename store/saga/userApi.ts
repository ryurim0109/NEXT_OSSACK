import { instance, instances } from '../../src/shared/api';

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

export const editProfileDB = async ({ nickname, image, userimg }: any) => {
	const file = new FormData();
	if (image) {
		file.append('imageFile', image);
		file.append('nickname', nickname);
		file.append('profileImgUrl', userimg);
	} else if (!image) {
		file.append('imageFile', new File([], '', { type: 'text/plane' }));
		file.append('nickname', nickname);
		file.append('profileImgUrl', userimg);
	}
	const { data } = await instances.put('/user/profile', file);
	return { imageUrl: data };
};

export const userImgDeleteDB = async (nickname: any) => {
	const file = new FormData();
	file.append('imageFile', new File([], '', { type: 'text/plane' }));
	file.append('nickname', nickname);
	file.append('profileImgUrl', '');
	const { data } = await instances.put('/user/profile', file);
	return { imageUrl: data };
};

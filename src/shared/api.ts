import axios from 'axios';

//1. axios 인터셉터 생성
export const instance = axios.create({
	baseURL: 'http://3.39.177.59:8080',

	//baseURL: "https://ossack-dk.shop",

	headers: {
		'content-type': 'application/json; charset=UTF-8',
		accept: 'application/json',
	},
	withCredentials: false,
});
export const instances = axios.create({
	baseURL: 'http://3.39.177.59:8080',

	//baseURL: "https://ossack-dk.shop",

	headers: {
		'Content-Type': 'multipart/form-data',
		accept: 'application/json',
	},
});

//2. 요청 인터셉터
// instance.interceptors.request.use(
// 	//요청직전 호출
// 	(config) => {
// 		const Token = localStorage.getItem('token');
// 		if (Token === '') {
// 			window.alert('로그인을 먼저 해주세요!');
// 			return config;
// 		}
// 		// const tokens = Token.split('=')[1];
// 		config.headers = {
// 			'content-type': 'application/json;charset=UTF-8',
// 			accept: 'application/json',
// 			Authorization: `Bearer ${Token}`,
// 		};
// 		return config;
// 	},
// 	//에러 전 호출
// 	(err) => {
// 		console.log(err);
// 	},
// );
// instances.interceptors.request.use(
// 	//요청직전 호출
// 	(config) => {
// 		const Token = localStorage.getItem('token');
// 		if (Token === '') {
// 			window.alert('로그인을 먼저 해주세요!');
// 			return config;
// 		}
// 		// const tokens = Token.split('=')[1];
// 		config.headers = {
// 			'Content-Type': 'multipart/form-data',
// 			accept: 'application/json',
// 			Authorization: `Bearer ${Token}`,
// 		};
// 		return config;
// 	},
// 	//에러 전 호출
// 	(err) => {
// 		console.log(err);
// 	},
// );

//3. 응답 인터셉터
instance.interceptors.response.use(
	(success) => {
		const response: any = success.data;

		if (
			response.statusCode === 200 &&
			response.responseMessage === '조회 성공'
		) {
			return response.posts;
		}

		return success;
	},
	(error) => {
		console.log(error);

		if (error.response.status === 403) {
			window.alert('권한이 없습니다.');
		}
		if (error.response.status === 500) {
			window.alert('로그인한 유저만 볼 수 있습니다.');
			/* .then(window.location.replace("/start")) */
		}

		if (error.response.status === 404) {
			window.alert('결과를 찾을 수 없습니다.');
		}

		return error;
	},
);

//export const TokenCheck = localStorage.getItem('token') ? true : false;

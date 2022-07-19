import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import {
	requestUserInfo,
	requestLoginInfo,
	editProfileDB,
	userImgDeleteDB,
} from '../saga/userApi';
import createAsyncSaga, {
	asyncActionCreator,
	createAsyncAction,
} from '../saga/sagaUtils';

export interface UserParams {
	userEmail: string;
	nickname: string;
	imageUrl: string;
}
export interface UserType {
	user: UserParams;
	is_login: boolean;
}
const initialState: UserType = {
	user: {
		userEmail: '',
		nickname: '',
		imageUrl: 'https://ossack.s3.ap-northeast-2.amazonaws.com/basicprofile.png',
	},

	is_login: false,
};
// Action type
const SET_USER = asyncActionCreator('SET_USER');
const LOG_OUT = 'LOG_OUT';
const USER_IMG = asyncActionCreator('USER_IMG');
const DEL_IMG = asyncActionCreator('DEL_IMG');

// Action Creator
const setUser = createAsyncAction(SET_USER);
const signUp = createAsyncAction(SET_USER);
const logOut = createAction(LOG_OUT, () => {});
const user_img = createAsyncAction(USER_IMG);
const del_img = createAsyncAction(DEL_IMG);

// saga
const getUserSaga = createAsyncSaga(signUp, requestUserInfo);
const getLoginSaga = createAsyncSaga(setUser, requestLoginInfo);
const putUserImgSaga = createAsyncSaga(user_img, editProfileDB);
const delUserImgSaga = createAsyncSaga(del_img, userImgDeleteDB);

// reducer
export default handleActions(
	{
		[SET_USER.SUCCESS]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.user = payload.user;
				draft.is_login = true;
			}),
		[LOG_OUT]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.is_login = false;
				localStorage.clear();
			}),
		[USER_IMG.SUCCESS]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.user = { ...state.user, imageUrl: payload.user.imageUrl };
			}),
		[DEL_IMG.SUCCESS]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.user = { ...state.user, imageUrl: payload.user.imageUrl };
			}),
	},
	initialState,
);

const actionCreators = { setUser, logOut, user_img, signUp, del_img };

export { actionCreators };

export function* userSaga() {
	yield takeLatest(SET_USER.REQUEST, getUserSaga);
	yield takeLatest(SET_USER.REQUEST, getLoginSaga);
	yield takeLatest(USER_IMG.REQUEST, putUserImgSaga);
	yield takeLatest(DEL_IMG.REQUEST, delUserImgSaga);
}

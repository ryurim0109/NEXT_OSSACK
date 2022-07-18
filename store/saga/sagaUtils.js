import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

// 비동기 액션 타입 생성
export function asyncActionCreator(actionName) {
	const asyncTypeAction = ['_REQUEST', '_SUCCESS', '_FAILURE'];
	return {
		REQUEST: actionName + asyncTypeAction[0],
		SUCCESS: actionName + asyncTypeAction[1],
		FAILURE: actionName + asyncTypeAction[2],
	};
}

// 비동기 액션 생성기
export function createAsyncAction(asyncAction) {
	return {
		request: createAction(asyncAction.REQUEST),
		success: createAction(asyncAction.SUCCESS),
		failure: createAction(asyncAction.FAILURE),
	};
}

// 비동기 액션 생성기
export function createAsyncActionSingle(asyncAction) {
	return createAction(asyncAction);
}

// 사가 제너레이터 생성기
export default function createAsyncSaga(asyncAction, asyncFunction) {
	return function* saga(action) {
		try {
			const result = yield call(asyncFunction, action.payload); /// api 호출 이때 파라미터는 request()에서 받은 값으로 전달

			yield put(asyncAction.success(result)); // success  액션함수를 dispatch 하여 api결과값 반환
		} catch (e) {
			//console.log("=====================================error========================================");
			//console.log(e);
			yield put(asyncAction.failure({ error: '' })); // failure  액션함수를 dispatch 하여 error 반환
		}
	};
}

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import { requestShareMapInfo, requestOfficeMapInfo } from '../saga/mapApi';
import createAsyncSaga, {
	asyncActionCreator,
	createAsyncAction,
} from '../saga/sagaUtils';

export interface MapType {
	office_list: any;
	share_list: any;
	is_loaded: boolean;
}

const initialState: MapType = {
	office_list: [],
	share_list: [],
	is_loaded: false,
};
// Action type
const SET_OFFICE_LIST = asyncActionCreator('SET_OFFICE_LIST');
const SET_SHARE_LIST = asyncActionCreator('SET_SHARE_LIST');
const LOADED = 'LOADED';

// Action Creator
const setOfficeList = createAsyncAction(SET_OFFICE_LIST);
const setShareList = createAsyncAction(SET_SHARE_LIST);
const isLoaded = createAction(LOADED, (loaded: any) => ({ loaded }));

// saga
const getShareMapSaga = createAsyncSaga(setShareList, requestShareMapInfo);
const getOfficeMapSaga = createAsyncSaga(setOfficeList, requestOfficeMapInfo);

// reducer
export default handleActions(
	{
		[SET_OFFICE_LIST.SUCCESS]: (state, action) =>
			produce(state, (draft) => {
				draft.office_list = action.payload.office_list;
				draft.is_loaded = true;
			}),
		[SET_SHARE_LIST.SUCCESS]: (state, action) =>
			produce(state, (draft) => {
				draft.share_list = action.payload.share_list;
				draft.is_loaded = true;
			}),
		[LOADED]: (state, action) =>
			produce(state, (draft) => {
				draft.is_loaded = action.payload.is_loaded;
			}),
	},
	initialState,
);

const actionCreators = {
	setOfficeList,
	isLoaded,
	setShareList,
};

export { actionCreators };

export function* mapSaga() {
	yield takeLatest(SET_SHARE_LIST.REQUEST, getShareMapSaga);
	yield takeLatest(SET_OFFICE_LIST.REQUEST, getOfficeMapSaga);
}
//청크
//const getOfficeData = (pos, level, router, monthly) => {
// 	const SWlat = pos.swLatLng.lat;
// 	const SWlng = pos.swLatLng.lng;
// 	const NElat = pos.neLatLng.lat;
// 	const NElng = pos.neLatLng.lng;
// 	const depositlimit = router?.split('&')[0]?.split('=')[1];
// 	const feelimit = router?.split('&')[1]?.split('=')[1];
// 	return function (dispatch) {
// 		dispatch(isLoaded(false));
// 		instance
// 			.get(
// 				`/map?level=${level}&SWlat=${SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}&depositlimit=${depositlimit}&feelimit=${feelimit}&monthly=${monthly}`,
// 			)
// 			.then((res) => {
// 				dispatch(setOfficeList(res.data));
// 			})
// 			.catch((err) => {
// 				console.log(err.response, '나는 지도 오피스 DB 오류');
// 				console.log(err, '나는 지도 오피스 DB 오류');
// 			});
// 	};
// };
// const getShareData = (pos, level) => {
// 	const SWlat = pos.swLatLng.lat;
// 	const SWlng = pos.swLatLng.lng;
// 	const NElat = pos.neLatLng.lat;
// 	const NElng = pos.neLatLng.lng;
// 	return function (dispatch) {
// 		dispatch(isLoaded(false));
// 		instance
// 			.get(
// 				`/map/sharedoffice?level=${level}&SWlat=${SWlat}&SWlng=${SWlng}&NElat=${NElat}&NElng=${NElng}`,
// 			)
// 			.then((res) => {
// 				dispatch(setShareList(res.data));
// 			})
// 			.catch((err) => {
// 				console.log(err.response, '나는 공유 오피스 DB 오류');
// 				console.log(err, '나는 공유 오피스 DB 오류');
// 			});
// 	};
// };

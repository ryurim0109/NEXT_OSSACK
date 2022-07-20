import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import { requestMainOffice, requestTestInfo } from '../saga/officeApi';
import createAsyncSaga, {
	asyncActionCreator,
	createAsyncAction,
} from '../saga/sagaUtils';

export interface SearchItemDataParams {
	totalpage: number;
	presentpage: number;
	keyword: string;
	estateResponseDtoList: Array<any>;
	mylike?: boolean;
	estateid?: number;
}
export interface MainofficeType {
	estateid: number;
	type: string;
	monthly: string;
	deposit: string;
	rent_fee: number;
	buildingFloor: number;
	roomFloor: number;
	buildingInfo: string;
	area: string;
	images: Array<string>;
	subways: Array<string>;
	mylike: boolean;
	title: string;
}
export interface coordinateResponseDtoType {
	lat: number;
	lng: number;
}
export interface ShareItemDataParams {
	totalpage: number;
	presentpage: number;
	keyword: string;
	sharedOfficeResponseDtos: Array<any>;
	mylike?: boolean;
	shareofficeid?: number;
}
export interface LikeParams {
	mylike: boolean;
	agent: string | null;
	personIncharge: string | null;
	phoneNumber: string | null;
	area: string | null;
	capacity: any;
	management_fee: any;
	type: string | null;
	toilet: any;
	buildingFloor: any;
	roomFloor: any;
	parking: any;
	monthly: string | null;
	rent_fee: string | null;
	deposit: string | null;
	subwayInfo: any;
	buildingDetail: string | null;
	buildingInfo: string | null;
	images: Array<string>;
	number: any;
	time?: string | null;
	minimum_days?: string | null;
	floor?: string | null;
	name?: string | null;
	price?: string | null;
	detail?: string | null;
	address?: string | null;
	imageList?: Array<string>;
	estateId: string | number;
	dong?: string | null;
	shareofficeid: string | number;
	detail_address?: string | null;
	coordinateResponseDto: coordinateResponseDtoType;
}
export interface officeType {
	list: SearchItemDataParams;
	main_list: Array<any>;
	test: Array<any>;
	hot_list: Array<any>;
	share_list: ShareItemDataParams;
	is_loaded: boolean;
	one_office: LikeParams;
	one_share_office: LikeParams;
	mylike: boolean;
}
const initialState: officeType = {
	list: {
		totalpage: 1,
		presentpage: 1,
		keyword: '서울시',
		estateResponseDtoList: [],
	},
	test: [],
	main_list: [],
	hot_list: [],
	share_list: {
		totalpage: 1,
		presentpage: 1,
		keyword: '서울시',
		sharedOfficeResponseDtos: [],
	},
	is_loaded: false,
	one_office: {
		mylike: false,
		agent: null,
		personIncharge: null,
		phoneNumber: null,
		area: null,
		capacity: null,
		management_fee: null,
		type: null,
		toilet: null,
		buildingFloor: null,
		roomFloor: null,
		monthly: null,
		parking: null,
		rent_fee: null,
		deposit: null,
		subwayInfo: null,
		buildingDetail: null,
		buildingInfo: null,
		images: [],
		number: null,
		estateId: 1,
		shareofficeid: 1,
		coordinateResponseDto: { lat: 37.5173319258532, lng: 127.047377408384 },
	},
	one_share_office: {
		mylike: false,
		agent: null,
		personIncharge: null,
		phoneNumber: null,
		area: null,
		capacity: null,
		management_fee: null,
		type: null,
		toilet: null,
		buildingFloor: null,
		roomFloor: null,
		parking: null,
		monthly: null,
		rent_fee: null,
		deposit: null,
		subwayInfo: null,
		buildingDetail: null,
		buildingInfo: null,
		images: [],
		number: null,
		time: null,
		minimum_days: null,
		floor: null,
		name: null,
		price: null,
		detail: null,
		address: null,
		imageList: [],
		estateId: 1,
		shareofficeid: 1,
		detail_address: null,
		coordinateResponseDto: { lat: 37.5173319258532, lng: 127.047377408384 },
	},
	mylike: false,
};
// Action type
const GET_MAIN_OFFICE = asyncActionCreator('GET_MAIN_OFFICE'); // 메인페이지 리스트 조회
const GET_TEST = asyncActionCreator('GET_TEST');

// Action Creator
const getMainOffice = createAsyncAction(GET_MAIN_OFFICE);
const getTest = createAsyncAction(GET_TEST);
// saga
const getMainSaga = createAsyncSaga(getMainOffice, requestMainOffice);
const getTestSaga = createAsyncSaga(getTest, requestTestInfo);

// reducer
export default handleActions(
	{
		[GET_MAIN_OFFICE.SUCCESS]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.main_list = payload.main_list;
			}),
		[GET_TEST.SUCCESS]: (state, { payload }) =>
			produce(state, (draft) => {
				draft.test = payload.test;
			}),
	},
	initialState,
);

const actionCreators = { getMainOffice, getTest };

export { actionCreators };

export function* officeSaga() {
	yield takeLatest(GET_MAIN_OFFICE.REQUEST, getMainSaga);
	yield takeLatest(GET_TEST.REQUEST, getTestSaga);
}

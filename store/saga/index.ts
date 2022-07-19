import { all, fork } from 'redux-saga/effects';
import { userSaga } from '../redux/user';
import { officeSaga } from '../redux/office';

export default function* rootSaga() {
	//console.log("rootSaga");
	yield all([fork(userSaga)]);
	yield all([fork(officeSaga)]);
}

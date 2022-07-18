import { all, fork } from 'redux-saga/effects';
import { userSaga } from '../redux/user';

export default function* rootSaga() {
	//console.log("rootSaga");
	yield all([fork(userSaga)]);
}

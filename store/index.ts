//사가
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index';
import { createWrapper } from 'next-redux-wrapper';
import user from './redux/user';
import office from './redux/office';
import map from './redux/map';

const rootReducer = combineReducers({
	user,
	office,
	map,
});

const env = process.env.NODE_ENV;

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [
		sagaMiddleware,
		(store: any) => (next: any) => (action: any) => {
			next(action);
		},
	];

	if (env === 'development') {
		const { logger } = require('redux-logger');
		middlewares.push(logger);
	}
	const composeEnhancers =
		typeof window === 'object' &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
			: compose;

	const enhancer = composeEnhancers(applyMiddleware(...middlewares));

	const store = createStore(rootReducer, enhancer);
	(store as any).sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};
export type RootState = ReturnType<typeof rootReducer>;
export const wrapper: any = createWrapper(configureStore, {
	debug: process.env.NODE_ENV === 'development',
});

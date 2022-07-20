import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { MyHeader, Bar, Spinner } from '../../src/components/shared/index';
//import { MapOfficeResult } from '../components/search/index';
import { RootState, wrapper } from '../../store/index';
import { ShareResult } from '../../src/components/containers/search/index';
import { actionCreators as officeActions } from '../../store/redux/office';
import { END } from 'redux-saga';
import { testinstance } from '../../src/shared/api';
import { GetServerSideProps } from 'next';

const MapOfficeList = (post: any) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const search = router.asPath.split('=')[1];

	const totalPage = useSelector(
		(state: RootState) => state?.office?.list.totalpage,
	);
	const title = useSelector((state: RootState) => state?.office?.list?.keyword);
	//const test = useSelector((state: RootState) => state?.office?.test);
	console.log(post);
	//console.log(test1);
	//const login = useSelector((state) => state.user.is_login);

	const [pageno, setPageno] = useState(1);
	const targetRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	const callback: any = async ([entry]: any, observer: any) => {
		if (entry.isIntersecting && !isLoading) {
			observer.unobserve(entry.target);
			setIsLoading(true);
			await new Promise((resolve) => {
				setTimeout(resolve, 2000);
			});
			setPageno((pre) => pre + 1);
			setIsLoading(false);
			observer.observe(entry.targetRef.current);
		}
	};

	useEffect(() => {
		let observer: any;
		if (targetRef.current) {
			observer = new IntersectionObserver(callback, { threshold: 1 });
			observer.observe(targetRef.current);
		}
		return () => observer && observer.disconnect();
	}, [targetRef.current]);

	return (
		<React.Fragment>
			<MyHeader is_back>{title} 리스트</MyHeader>
			<Outter>
				<ShareResult post={post} />
			</Outter>
			{isLoading ? <Spinner /> : null}
			{totalPage > pageno ? <div ref={targetRef}> </div> : null}
			<Bar />
		</React.Fragment>
	);
};
const Outter = styled.div`
	width: 100%;
	padding: 0 16px;
	padding-bottom: 90px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 62px;
`;

export default MapOfficeList;

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		console.log('context in next', context);
		const res = await testinstance.get('/posts');
		const data = res.data;
		//console.log(data);
		return { props: { post: data } };
	} catch (e) {
		//console.log(e);
		return { props: { e } };
	}
};

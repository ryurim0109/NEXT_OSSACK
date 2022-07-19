import React, { useState } from 'react';
import { Button } from '../../../elements/index';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Filter } from './index';
interface SearchProps {
	name: string[] | string | undefined;
}
const MapSearchBar = (props: SearchProps) => {
	const router = useRouter();
	const { name } = props;
	const [isOpen, setIsOpen] = useState(false);
	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<React.Fragment>
			<Outter>
				<Button
					is_back
					_onClick={() => {
						router.push('/main');
					}}
				/>
				<Button
					height='48px'
					width={name === 'office' ? '248px' : '277px'}
					margin='16px 5%'
					fontSize='16px'
					borderRadius='8px'
					color='#767676'
					backgroundColor='#F5F5F5'
					_onClick={() => {
						router.push('/search');
					}}>
					시, 구, 동으로 검색어를 입력하세요.
				</Button>
				{name === 'office' ? (
					<FilterBtn onClick={openModalHandler}>
						<img src='/assets/filter.svg' alt='필터 아이콘' />
					</FilterBtn>
				) : null}
			</Outter>

			{isOpen ? (
				<>
					<ModalBackdrop onClick={openModalHandler}></ModalBackdrop>
					<Filter isOpen={isOpen} setIsOpen={setIsOpen} />
				</>
			) : null}
		</React.Fragment>
	);
};
const Outter = styled.div`
	width: 100%;
	height: 80px;
	background: #fff;
	padding: 0 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
`;
const ModalBackdrop = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	z-index: 999;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.7);
`;
const FilterBtn = styled.div`
	background-color: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export default MapSearchBar;

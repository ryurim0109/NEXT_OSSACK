import React, { useState } from 'react';
import { Grid, Text, Button } from '../../../elements/index';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
interface FilterProps {
	isOpen: boolean;
	setIsOpen: any;
}
const Filter = (props: FilterProps) => {
	const router = useRouter();
	const { isOpen, setIsOpen } = props;
	const ModalClose = () => {
		setIsOpen(!isOpen);
	};

	const [currentClick, setCurrentClick] = useState(null);
	const [prevClick, setPrevClick] = useState(null);
	const [rentClick, setRentClick] = useState(null);
	const [rentPrevClick, setRentPrevClick] = useState(null);

	const GetClick = (e: any) => {
		setCurrentClick(e.target.id);
	};

	const GetRent = (e: any) => {
		setRentClick(e.target.id);
	};

	React.useEffect(() => {
		if (currentClick !== null) {
			let current = document.getElementById(currentClick);
			if (current) {
				current.style.backgroundColor = 'rgba(62, 0, 255, 0.1)';
				current.style.border = '1px solid #3E00FF';
			}
		}

		if (prevClick !== null) {
			let prev = document.getElementById(prevClick);
			if (prev) {
				prev.style.backgroundColor = '#fff';
				prev.style.border = '1px solid #E6E7E8';
			}
		}

		setPrevClick(currentClick);
	}, [currentClick]);

	React.useEffect(() => {
		if (rentClick !== null) {
			let rent = document.getElementById(rentClick);
			//console.log(rent.innerHTML);
			if (rent) {
				rent.style.backgroundColor = 'rgba(62, 0, 255, 0.1)';
				rent.style.border = '1px solid #3E00FF';
			}
		}

		if (rentPrevClick !== null) {
			let prev = document.getElementById(rentPrevClick);
			if (prev) {
				prev.style.backgroundColor = '#fff';
				prev.style.border = '1px solid #E6E7E8';
			}
		}

		setRentPrevClick(rentClick);
	}, [rentClick]);

	const findOffice = () => {
		router.push(
			`/officemap/office?depositlimit=${currentClick}&feelimit=${rentClick}`,
		);
		setIsOpen(!isOpen);
	};
	const refreshBtn = () => {
		setCurrentClick(null);
		setRentClick(null);
	};

	return (
		<React.Fragment>
			<Outter isOpen={isOpen}>
				<Grid
					boxShadow=' 30px 30px 30px rgba(0, 0, 0, 0.3)'
					borderRadius='8px 8px 0 0'
					width='100%'
					height='500px'
					bg='#fff'>
					<Grid cursor='pointer' height='4px' _onClick={ModalClose}>
						<Br />
					</Grid>
					<Grid width='100%' padding='16px'>
						<Text size='16px' bold>
							가격
						</Text>
						<Grid width='100%' height='173px' padding='24px 0'>
							<Text size='16px'>보증금(전세금)</Text>
							<Grid
								display='flex'
								height='34px'
								justifyContent='space-between'
								margin='24px 0 0'>
								<Btn id='1000' onClick={GetClick}>
									1천만원
								</Btn>
								<Btn id='2000' onClick={GetClick}>
									2천만원
								</Btn>
								<Btn id='3000' onClick={GetClick}>
									3천만원
								</Btn>
							</Grid>
							<Grid
								display='flex'
								height='34px'
								justifyContent='space-between'
								margin='24px 0 0'>
								<Btn id='4000' onClick={GetClick}>
									4천만원
								</Btn>
								<Btn id='5000' onClick={GetClick}>
									5천만원
								</Btn>
								<Btn id='6000' onClick={GetClick}>
									6천만원
								</Btn>
							</Grid>
						</Grid>
						<Grid width='100%' height='173px' padding='24px 0'>
							<Text size='16px'>월세</Text>
							<Grid
								display='flex'
								height='34px'
								justifyContent='space-between'
								margin='24px 0 0'>
								<Btn id='100' onClick={GetRent}>
									100만원
								</Btn>
								<Btn id='200' onClick={GetRent}>
									200만원
								</Btn>
								<Btn id='300' onClick={GetRent}>
									300만원
								</Btn>
							</Grid>
							<Grid
								display='flex'
								height='34px'
								justifyContent='space-between'
								margin='24px 0 0'>
								<Btn id='400' onClick={GetRent}>
									400만원
								</Btn>
								<Btn id='500' onClick={GetRent}>
									500만원
								</Btn>
								<Btn id='600' onClick={GetRent}>
									600만원
								</Btn>
							</Grid>
						</Grid>
						<Grid
							width='100%'
							margin='32px 0 0'
							height='40px'
							display='flex'
							justifyContent='space-between'
							alignItems='center'>
							<Grid
								width='96px'
								height='40px'
								display='flex'
								justifyContent='space-between'
								alignItems='center'>
								<Grid width='24px' height='24px'>
									<img src='/assets/refresh.svg' alt='재설정 아이콘' />
								</Grid>
								<Button
									width='64px'
									height='24px'
									backgroundColor='none'
									color='#3F3F3F'
									fontSize='14px'
									padding='0'
									_onClick={refreshBtn}
									border='none'>
									가격 재설정
								</Button>
							</Grid>

							<Button
								width='212px'
								height='40px'
								backgroundColor='#3E00FF'
								color='#fff'
								borderRadius='8px'
								padding='0'
								fontSize='14px'
								_onClick={findOffice}>
								매물보기
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Outter>
		</React.Fragment>
	);
};

const FadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(500px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`;

const FadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0px);
    }
    100%{
        opacity: 0;
        transform: translateY(500px);
        pointer-events: none;
    }
`;
interface OutterType {
	isOpen: boolean;
}
const Outter = styled.div<OutterType>`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 999;
	display: flex;
	animation: ${(props) => (props.isOpen ? FadeIn : FadeOut)} 1s ease-out
		alternate;
	/* animation: modal-show 1s; */
	/* @keyframes modal-show { 
    from { opacity: 0; height: 0; } to { opacity: 1; height: 500px; } }  */
`;
const Br = styled.div`
	width: 40px;
	height: 4px;
	background-color: #f5f5f5;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	top: 10px;
`;
const Btn = styled.button`
	width: 104px;
	height: 34px;
	border-radius: 8px;
	font-size: 12px;
	color: #808080;
	background: #fff;
	border: 1px solid #e6e7e8;
`;

export default Filter;

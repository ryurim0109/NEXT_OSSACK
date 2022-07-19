/*global kakao*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
//import { getOfficeData } from '../../redux/modules/map';
//아이콘
import { Spinner } from '../../shared/index';
import Minus from '../../../../public/assets/minus.svg';
import Plus from '../../../../public/assets/plus.svg';
import Location from '../../../../public/assets/location.svg';

import { useRouter } from 'next/router';

import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { Position, Overlay } from './index';
//const { kakao } = window;
const MainMap = (props) => {
	const router = useRouter();
	const { name } = props;
	const depositlimit = router?.asPath
		?.split('/')[2]
		?.split('?')[1]
		?.split('&')[0]
		?.split('=')[1];
	const feelimit = router?.asPath
		?.split('/')[2]
		?.split('?')[1]
		?.split('&')[1]
		?.split('=')[1];

	// const depositlimit = router?.split('&')[0]?.split('=')[1];
	// const feelimit = router?.split('&')[1]?.split('=')[1];
	const getOffice = useSelector((state) => state.map.office_list);
	const shareOffice = useSelector((state) => state.map.share_list);
	const is_loaded = useSelector((state) => state.map.is_loaded);

	const [level, setLevel] = useState(8); //지도레벨
	const [map, setMap] = useState(); //지도
	const [pos, setPos] = useState(); //경도 위도

	const [state, setState] = useState({
		//기본 설정값
		center: {
			lat: 37.5173319258532,
			lng: 127.047377408384,
		},
	});
	const _position = {
		swLatLng: {
			lat: map?.getBounds().getSouthWest().getLat(),
			lng: map?.getBounds().getSouthWest().getLng(),
		},
		neLatLng: {
			lat: map?.getBounds().getNorthEast().getLat(),
			lng: map?.getBounds().getNorthEast().getLng(),
		},
	};
	useEffect(() => {
		if (map && name === 'office') {
			dispatch(mapActions.getOfficeData(_position, level, router));
		} else if (map && name === 'share') {
			dispatch(mapActions.getShareData(_position, level));
		}
	}, [map, router]);

	const setLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				map.setCenter(
					new kakao.maps.LatLng(
						position.coords.latitude,
						position.coords.longitude,
					),
				);
			});
		}
	};
	if (name === 'office') {
		return (
			<React.Fragment>
				<MainContent>
					<Map
						center={state.center}
						onCreate={(map) => setMap(map)}
						onZoomChanged={(map) => setLevel(map.getLevel())}
						onDragEnd={(map) =>
							setPos({
								lat: map.getCenter().getLat(),
								lng: map.getCenter().getLng(),
								swLatLng: {
									lat: map.getBounds().getSouthWest().getLat(),
									lng: map.getBounds().getSouthWest().getLng(),
								},
								neLatLng: {
									lat: map.getBounds().getNorthEast().getLat(),
									lng: map.getBounds().getNorthEast().getLng(),
								},
								setLevel: map.getLevel(),
							})
						}
						style={{ width: '100%', height: 'inherit' }}
						level={level}
						minLevel={5}
						maxLevel={10}>
						{is_loaded ? (
							<>
								{getOffice?.cityResponseDtoList?.length === 0
									? null
									: getOffice?.cityResponseDtoList?.map((position, index) => {
											return (
												<CustomOverlayMap
													key={`${position.title}-${position.coordinate}`}
													position={position.coordinate}>
													<div
														onClick={() =>
															history.push(
																`/map/office?query=${position.title}&depositlimit=${depositlimit}&feelimit=${feelimit}`,
															)
														}>
														<Overlay position={position} />
													</div>
												</CustomOverlayMap>
											);
									  })}
							</>
						) : (
							<Spinner />
						)}
					</Map>
					<Lev>
						<Btn onClick={setLocation}>
							<Location />
						</Btn>
						<PlusBtn>
							<button onClick={() => (level > 5 ? setLevel(level - 1) : null)}>
								<Plus />
							</button>
							<button onClick={() => (level < 10 ? setLevel(level + 1) : null)}>
								<Minus />
							</button>
						</PlusBtn>
					</Lev>
					{pos && (
						<Position pos={pos} level={level} name={name} router={router} />
					)}
				</MainContent>
			</React.Fragment>
		);
	} else if (name === 'share') {
		return (
			<React.Fragment>
				<MainContent>
					<Map
						center={state.center}
						onCreate={(map) => setMap(map)}
						onZoomChanged={(map) =>
							setPos({
								lat: map.getCenter().getLat(),
								lng: map.getCenter().getLng(),
								swLatLng: {
									lat: map.getBounds().getSouthWest().getLat(),
									lng: map.getBounds().getSouthWest().getLng(),
								},
								neLatLng: {
									lat: map.getBounds().getNorthEast().getLat(),
									lng: map.getBounds().getNorthEast().getLng(),
								},
							})
						}
						onDragEnd={(map) =>
							setPos({
								lat: map.getCenter().getLat(),
								lng: map.getCenter().getLng(),
								swLatLng: {
									lat: map.getBounds().getSouthWest().getLat(),
									lng: map.getBounds().getSouthWest().getLng(),
								},
								neLatLng: {
									lat: map.getBounds().getNorthEast().getLat(),
									lng: map.getBounds().getNorthEast().getLng(),
								},
							})
						}
						style={{ width: '100%', height: 'inherit' }}
						level={level}
						minLevel={5}
						maxLevel={10}>
						{is_loaded ? (
							<>
								{shareOffice?.cityResponseDtoList?.length === 0
									? null
									: shareOffice?.cityResponseDtoList?.map((position) => {
											return (
												<CustomOverlayMap
													key={`${position.title}-${position.coordinate}`}
													position={position.coordinate}>
													<div
														onClick={() =>
															history.push(
																`/map/shareoffice?query=${position.title}`,
															)
														}>
														<Overlay position={position} name={name} />
													</div>
												</CustomOverlayMap>
											);
									  })}
							</>
						) : (
							<Spinner />
						)}
					</Map>
					<Lev>
						<Btn onClick={setLocation}>
							<Location />
						</Btn>
						<PlusBtn>
							<button onClick={() => (level > 5 ? setLevel(level - 1) : null)}>
								<Plus />
							</button>
							<button onClick={() => (level < 10 ? setLevel(level + 1) : null)}>
								<Minus />
							</button>
						</PlusBtn>
					</Lev>
					{pos && <Position pos={pos} level={level} name={name} />}
				</MainContent>
			</React.Fragment>
		);
	}
};
const MainContent = styled.div`
	height: inherit;
	position: relative;
`;

const Lev = styled.div`
	width: 40px;
	height: 125px;
	position: absolute;
	bottom: 100px;
	left: 16px;
	z-index: 2;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;
const Btn = styled.button`
	width: 40px;
	height: 40px;
	background: #fff;
	border: none;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;
const PlusBtn = styled.div`
	width: 40px;
	height: 72px;
	background: #fff;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
	position: relative;
	&::before {
		content: '';
		display: block;
		width: 24px;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.darkgray2};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
	& button {
		background: none;
		border-radius: 0px;
		width: 30px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
export default MainMap;

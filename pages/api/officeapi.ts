import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
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
	subways: string;
	mylike: boolean;
	title: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data[]>,
) {
	res.status(200).json([
		{
			estateid: 12323,
			type: '중소형사무실',
			monthly: '월세',
			deposit: '1억',
			rent_fee: 300,
			buildingFloor: 3,
			roomFloor: 2,
			buildingInfo: '깔끔합니다',
			area: '120/105㎡(전용률 88%)',
			images: [
				'https://blob.nemoapp.kr/article-photos/4e0ebb23-faf8-4194-9d99-0a0fa35766df/s.jpg',
			],
			subways: '홍대입구',
			mylike: true,
			title: '깨끗한 사무실',
		},
		{
			estateid: 12323,
			type: '중소형사무실',
			monthly: '월세',
			deposit: '1억',
			rent_fee: 300,
			buildingFloor: 3,
			roomFloor: 2,
			buildingInfo: '깔끔합니다',
			area: '120/105㎡(전용률 88%)',
			images: [
				'https://blob.nemoapp.kr/article-photos/4e0ebb23-faf8-4194-9d99-0a0fa35766df/s.jpg',
			],
			subways: '홍대입구',
			mylike: true,
			title: '깨끗한 사무실',
		},
		{
			estateid: 12323,
			type: '중소형사무실',
			monthly: '월세',
			deposit: '1억',
			rent_fee: 300,
			buildingFloor: 3,
			roomFloor: 2,
			buildingInfo: '깔끔합니다',
			area: '120/105㎡(전용률 88%)',
			images: [
				'https://blob.nemoapp.kr/article-photos/4e0ebb23-faf8-4194-9d99-0a0fa35766df/s.jpg',
			],
			subways: '홍대입구',
			mylike: true,
			title: '깨끗한 사무실',
		},
		{
			estateid: 12323,
			type: '중소형사무실',
			monthly: '월세',
			deposit: '1억',
			rent_fee: 300,
			buildingFloor: 3,
			roomFloor: 2,
			buildingInfo: '깔끔합니다',
			area: '120/105㎡(전용률 88%)',
			images: [
				'https://blob.nemoapp.kr/article-photos/4e0ebb23-faf8-4194-9d99-0a0fa35766df/s.jpg',
			],
			subways: '홍대입구',
			mylike: true,
			title: '깨끗한 사무실',
		},
	]);
}

import type { NextApiRequest, NextApiResponse } from 'next';

type userType = {
	id: number;
	userEmail: string;
	nickname: string;
	imageUrl: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<userType>,
) {
	res.status(200).json({
		id: 1,
		userEmail: '500@error.com',
		nickname: '하윙',
		imageUrl: 'https://ossack.s3.ap-northeast-2.amazonaws.com/basicprofile.png',
	});
}

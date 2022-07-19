import { instance } from '../../src/shared/api';

export const requestShareMapInfo = async (shareMapInfo: {
	level: number;
	SWlat: number;
	SWlng: number;
	NElat: number;
	NElng: number;
}) => {
	const { data } = await instance.get(
		`/map/sharedoffice?level=${shareMapInfo.level}&SWlat=${shareMapInfo.SWlat}&SWlng=${shareMapInfo.SWlng}&NElat=${shareMapInfo.NElat}&NElng=${shareMapInfo.NElng}`,
	);

	return { shareList: data };
};

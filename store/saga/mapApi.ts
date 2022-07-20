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

	return { share_list: data };
};

export const requestOfficeMapInfo = async (mapInfo: {
	level: number;
	SWlat: number;
	SWlng: number;
	NElat: number;
	NElng: number;
	depositlimit: string | undefined;
	feelimit: string | undefined;
	monthly?: string | undefined;
}) => {
	const { data } = await instance.get(
		`/map?level=${mapInfo.level}&SWlat=${mapInfo.SWlat}&SWlng=${mapInfo.SWlng}&NElat=${mapInfo.NElat}&NElng=${mapInfo.NElng}&depositlimit=${mapInfo.depositlimit}&feelimit=${mapInfo.feelimit}&monthly=${mapInfo.monthly}`,
	);

	return { office_list: data };
};

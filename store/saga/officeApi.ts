import { instance } from '../../src/shared/api';

export const requestMainOffice = async (dong: string) => {
	const { data } = await instance.get(`/estates?query=${dong}`);

	return { main_office: data };
};

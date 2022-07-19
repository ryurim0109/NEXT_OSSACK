import { instance } from '../../src/shared/api';

export const requestMainOffice = async (dong: string) => {
	//const { data } = await instance.get(`/estates?query=${dong}`);
	const { data } = await instance.get('http://localhost:3000/api/officeapi');

	return { main_office: data };
};

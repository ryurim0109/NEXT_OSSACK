import React from 'react';
import { useRouter } from 'next/router';
import { Bar } from '../../src/components/shared';
import { MapSearchBar } from '../../src/components/containers/map';

const OfficeMap = () => {
	const router = useRouter();

	const { name } = router.query;
	return (
		<>
			<MapSearchBar name={name} />
			<Bar />
		</>
	);
};

export default OfficeMap;

import React, { useState, useCallback } from 'react';

const useText = () => {
	const [value, setValue] = useState<string>('');
	const onChange = useCallback((e: any) => {
		setValue(e.target.value);
	}, []);
	return [value, onChange];
};

export default useText;

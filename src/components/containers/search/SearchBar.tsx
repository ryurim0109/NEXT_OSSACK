import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Search from '../../../../public/assets/search.svg';
interface SearchBarProps {
	onAddKeyword: (text: string) => boolean | undefined;
	activeTab: number;
}
function SearchBar({ onAddKeyword, activeTab }: SearchBarProps) {
	const [keyword, setKeyword] = useState('');
	const router = useRouter();

	const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};
	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (keyword && e.key === 'Enter') {
			onAddKeyword(keyword);
		}
	};

	const Entercheck = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (keyword && e.key === 'Enter') {
			if (!activeTab) {
				router.push(`/map/office?query=${keyword}`);
			} else {
				router.push(`/map/shareoffice?query=${keyword}`);
			}
		}
	};

	const handleClearKeyword = () => {
		setKeyword('');
	};

	const hasKeyword = !!keyword;

	return (
		<Container>
			<SearchIcon>
				<Search fill='none' stroke='#AFB4BE' />
			</SearchIcon>
			<InputContainer>
				<Input
					placeholder='시 ,구 ,동으로 검색어를 입력하세요.'
					active={hasKeyword}
					value={keyword}
					onChange={handleKeyword}
					onKeyDown={handleEnter}
					onKeyUp={Entercheck}
				/>

				{keyword && <RemoveIcon onClick={handleClearKeyword} />}
			</InputContainer>
			<SearchIcon />
		</Container>
	);
}

const horizontalCenter = css`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;

const Container = styled.div`
	position: relative;
	width: 92%;
	margin: 10px 4%;
	background: #f5f5f5;
	border-radius: 4px;
	padding: 15px 40px;
	box-sizing: border-box;
`;

const SearchIcon = styled.span`
	${horizontalCenter}
	position: absolute;
	left: 10px;
	right: 18px;
	width: 24px;
	height: 24px;
	background-position: -356px -260px;
	display: inline-block;
	overflow: hidden;
	color: transparent;
	vertical-align: middle;
	background-size: 467px 442px;
	background-repeat: no-repeat;
`;

const RemoveIcon = styled.span`
	${horizontalCenter}
	right: 0px;
	width: 20px;
	height: 20px;
	background-position: -389px -29px;
	display: inline-block;
	overflow: hidden;
	color: transparent;
	vertical-align: top;
	background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
	background-size: 467px 442px;
	background-repeat: no-repeat;
`;

const InputContainer = styled.div`
	position: relative;
`;
interface InputPropsType {
	active?: boolean;
}
const Input = styled.input<InputPropsType>`
	width: 100%;
	background-color: #f5f5f5;
	font-size: ${({ theme }) => theme.fontSizes.large};
	box-sizing: border-box;
	border: none;
	outline: none;
	${({ active }) =>
		active &&
		`
    padding-right: 25px; 
  `}
`;

export default SearchBar;

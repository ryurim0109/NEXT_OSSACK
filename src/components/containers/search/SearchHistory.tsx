import React from 'react';
import styled from 'styled-components';
import Close from '../../../../public/assets/close.svg';
import { useRouter } from 'next/router';
interface HistoryProps {
	onRemoveKeyword: (id: number) => void;
	onClearKeywords: () => void;
	activeTab: number;
	keywords: Array<any>;
}
function History({
	keywords,
	onRemoveKeyword,
	onClearKeywords,
	activeTab,
}: HistoryProps) {
	const router = useRouter();
	if (keywords.length === 0) {
		return <HistoryContainer>최근 검색된 기록이 없습니다.</HistoryContainer>;
	}
	return (
		<HistoryContainer>
			<HeaderContainer>
				<Title>최근 검색어</Title>
				<RemoveText onClick={onClearKeywords}>전체삭제</RemoveText>
			</HeaderContainer>
			<ListContainer>
				{keywords?.map(({ id, text }) => {
					return (
						<KeywordContainer key={id}>
							{!activeTab ? (
								<Keyword
									onClick={() => {
										router.push(`/map/office?query=${text}`);
									}}>
									{text}
								</Keyword>
							) : (
								<Keyword
									onClick={() => {
										router.push(`/map/shareoffice?query=${text}`);
									}}>
									{text}
								</Keyword>
							)}
							<RemoveButton
								onClick={() => {
									onRemoveKeyword(id);
								}}>
								<Close fill='none' stroke='#ccc' />
							</RemoveButton>
						</KeywordContainer>
					);
				})}
			</ListContainer>
		</HistoryContainer>
	);
}

const HistoryContainer = styled.div`
	padding: 18px;
`;
const HeaderContainer = styled.div`
	overflow: hidden;
`;
const Title = styled.span`
	float: left;
	font-weight: 400;
	color: #666;
`;
const RemoveText = styled.span`
	float: right;
	color: #999;
`;

const ListContainer = styled.ul`
	margin: 10px 0;
`;

//&는 자기 자신을 나타냄
//즉, 나 자신(li)들에서 마지막 요소 값을 제외한 값에 margin-bottom 속성 지정
const KeywordContainer = styled.li`
	overflow: hidden;

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;
interface RemoveButtonType {
	onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}
const RemoveButton = styled.button<RemoveButtonType>`
	width: 20px;
	height: 20px;
	float: right;
	color: #ccc;
	border: none;
	background: none;
`;

const Keyword = styled.span`
	font-size: 15px;
	font-weight: 400;
	cursor: pointer;
`;

export default History;

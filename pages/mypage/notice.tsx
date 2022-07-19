import React from 'react';
import styled from 'styled-components';
import { MyHeader, Bar, Accordion } from '../../src/components/shared/index';
import { useSelector } from 'react-redux';

const Notice = () => {
	// const login = useSelector((state) => state.user.is_login);
	const contents = [
		{
			title: '📢 거래완료된 대상물 과태료 부과 시행 알림',
			content:
				'국토교통부는 한국부동산원을 인터넷 표시, 광고 모니터링 위탁기관으로 지정하여 22년 1월부터 거래완료 여부를 모니터링 중에 있습니다.\n\n(국토교통부 고시 제2021-1489호)\n게재된 광고가 거래완료 되었음에도 불구하고 삭제하지 않을 경우\n\n공인중개사법 제51조제2항제1호에 의거 500만원 이하의 과태료가 부과될 수 있으니 주의하시기 바랍니다.\n\n[상세 내용]\n\n1. 시행 주체 : 한국부동산원\n2. 과태료 부과 대상 : 22년 4월 1일 이후 게재된 광고\n3. 과태료 : 500만원 이하의 과태료\n4. 내용 : 거래 완료된 광고를 삭제하지 않고 광고를 진행 하는 경우\n\n감사합니다. 오싹 드림',
		},
		{
			title: '📢 검수 정책 강화 안내',
			content:
				'항상 저희 오싹을 이용해주시는 중개사님께 진심으로 감사드립니다.\n\n오싹에서는 오싹에 대한 이용자의 신뢰도 향상과 더불어 정직하게 광고 중인 중개사님을 위해 다양한 방법으로 매물정보 관리 및 검수에 힘쓰고 있습니다.\n\n이에 따라 추가되는 매물정보 검수 정책을 안내드리고자 합니다.\n\n내용은 아래와 같습니다.\n\n첫 번째, 매물정보 광고에 사용된 사진이 사무소 간 공정한 경쟁을 해한다 판단되는 경우 해당 매물을 즉시 삭제 처리합니다.\n계획된 목적을 가지고 연출, 편집된 사진으로 광고하는 경우 등이 이에 해당합니다.\n\n두 번째, 오싹 서비스 품질을 저하시키거나 저하시킬 우려가 있다고 판단되는 경우 해당 매물을 즉시 삭제 처리합니다.\n선량한 풍속 및 기타 사회통념에 반하는 사진(신체 또는 일부, 속옷 등)이 광고 사진에 포함된 경우 \n또는 광고 내용에 욕설, 비속어, 은어 등 통상적인 금기어 사용과 그 외 사회 통념에 반하는 비정상적인 활동을 하는 경우',
		},
		{
			title: '🚨 허위매물 등록에 따른 이용제한',
			content:
				'최근 이용자로부터 접수되는 허위매물에 관한 신고나 리뷰가 급증하고 있습니다.\n\n오싹에서는 허위매물 등록으로 인해 서비스의 신뢰도가 떨어지게 되면 결국,오싹을 이용하는 전체 중개사님이 피해를 받게 된다는 점을 항상 염두에 두고 타서비스에 비해 강도 높은 매물등록 관리정책과 허위매물 관리정책을 수행해왔습니다.\n\n다만,모든 중개사무소에 동일하게 적용할 수 있고 객관적으로 입증할 수 있는 기준에 따라 허위매물 관리정책을 수행하려다 보니, 허위매물을 올리는 중개사님들에게 즉각적인 제재가 이루어지기 힘든 점이 있고 이를 악용하는 중개사님이 있는 것으로 알고 있습니다.\n\n이에 따라 오싹에서는 허위매물임을 확인하는 기존의 절차 및 기준 이외에도 내부적인 기준을 마련하여 다소 주관적일 수 있더라도 악의적인 허위매물 등록자의 이용을 제한하려고 합니다.',
		},
	];
	const is_session = localStorage.getItem('token');

	// if (!login || !is_session) {
	//   return (
	//     <React.Fragment>
	//       <NotUser />
	//     </React.Fragment>
	//   );
	// } else {
	return (
		<React.Fragment>
			<MyHeader is_my> 공지사항</MyHeader>
			<Wrap>
				{contents.map((c, idx) => {
					return (
						<Outter key={idx}>
							<Accordion title={c.title} contents={c.content} />
						</Outter>
					);
				})}
			</Wrap>
			<Bar />
		</React.Fragment>
	);
	// }
};
const Wrap = styled.div`
	width: 100%;
	padding-bottom: 180px;
`;
const Outter = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 16px;
	position: relative;
	top: 80px;
`;
export default Notice;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as land from './LandingComponent';
import { MemberItem, MemberList } from '../components';

const initMember = ['총무', '경현', '형원'];
const payerIndex = 0;
export default function LandingPage() {
  const [memberList, setMemberList] = useState(initMember);
  const [payer, setPayer] = useState(payerIndex);

  const handleAddMember = () => {
    setMemberList([...memberList, '']);
  };

  return (
    <land.Container>
      <land.Header>
        <h2>오늘의 정산</h2>
        <input type="date" />
        <p>모임의 정보와 구성원을 입력해주세요.</p>
      </land.Header>
      <MemberList memberList={memberList} payer={payer} />
      <land.Footer>
        <Link to="/pay">다음</Link>
      </land.Footer>
    </land.Container>
  );
}
